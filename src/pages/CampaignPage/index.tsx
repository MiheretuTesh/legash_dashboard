import React, { useContext, useEffect, useState } from "react";
import TableActionsHeader from "../../components/TableActionsHeader";
import IconButton from "@mui/material/IconButton";
import { DataGrid, GridSelectionModel } from "@mui/x-data-grid";
import { OptionsIcon } from "../../assets";
import { UserTableRow } from "../../types";
import UserModal from "../../components/UserModal";
import { useGetUsers } from "../../hooks/useGetUsers";
import { useGetCampaigns } from "../../hooks/useGetCampaigns";
import { Roles, TABLE_LIMIT } from "../../constants";
import DeleteModal from "../../components/DeleteModal";
import { useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import "jspdf-autotable";
import TablePagination from "../../components/Pagination";
import { NewOnsiteChecklistContext } from "../../contexts/NewOnsiteChecklistContext";
import { useStyles } from "../../styles/DataGrid.style";
import moment from "moment";
import { data } from "jquery";
import LoadingSpinner from "../../components/LoadingSpinner";
// import { useGetUserSearch } from "../../hooks/useGetUserSearch"

const CampaignPage = ({ parentRoute }: any) => {
  const styles = useStyles();
  const navigate = useNavigate();
  const [currentOffset, setCurrentOffset] = useState(0);
  const [totalSelected, setTotalSelected] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [tableRows, setTableRows] = useState<any[]>([]);
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [isUserDeleteModalOpen, setIsUserDeleteModalOpen] = useState(false);
  const [userModalType, setUserModalType] = useState("add");
  const [rowForEdit, setRowForEdit] = useState({
    id: 0,
    first_name: "",
    last_name: "",
    email: "",
    updated_at: "",
  });

  const [selectionModelPersonal, setSelectionModelPersonal] =
    useState<GridSelectionModel>([]);

  const [selectedUsers, setSelectedUsers] = useState<GridSelectionModel>();

  const { dataCampaigns, isLoadingCampaigns } = useGetCampaigns({});

  const { dataUsers: dataAllUsers, isLoadingUsers: isLoadingAllUsers } =
    useGetUsers({});

  const exportTableToPdf = () => {};

  const onNextHandler = () => {
    setCurrentOffset((prevState) => prevState + TABLE_LIMIT);
  };

  const onPreviousHandler = () => {
    setCurrentOffset((prevState) => prevState - TABLE_LIMIT);
  };

  useEffect(() => {
    if (dataCampaigns?.data?.campaigns?.length > 0) {
      const tableData: any[] = [];

      console.log(dataCampaigns?.data, "dataCampaigns?.data");

      dataCampaigns?.data.campaigns.forEach((data: any) => {
        tableData.push({
          id: data._id,
          currentFundedAmount: data.currentFundedAmount,
          user: `${data.first_name} ${data.last_name}`,
          diagnosis: data.diagnosis[0],
          status: data.status,
          updatedAt: moment(data.updatedAt).format("MMM D, YYYY HH:mm"),
          targetFunding: data.targetFunding,
          treatmentRequired: data.treatmentRequired,
          startDate: data.startDate,
          endDate: data.endDate,
          coverImage: data.coverImage,
        });
      });
      setTableRows(tableData);
    } else {
      setTableRows([]);
    }

    return () => {
      setTableRows([]);
    };
  }, [dataCampaigns]);

  const handleOnSearchFieldChange = (e: any) => {
    // setSearchValue((prevName) => e.target.value);
    // fetch(``, {
    //   method: "GET",
    //   headers: {
    //     Authorization: `Bearer ${localStorage.getItem("token")}`,
    //   },
    // })
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((users: any) => {
    //     const tableData: UserTableRow[] = [];
    //     users?.results.forEach((data: any) => {
    //       tableData.push({
    //         assets: "",
    //         id: data.id,
    //         user: `${data.first_name} ${data.last_name}`,
    //         email: data.email,
    //         role: data.type,
    //         updated_at: moment(data.updated_at).format("MMM D, YYYY HH:mm"),
    //       });
    //     });
    //     setTableRows(tableData);
    //   })
    //   .catch((error) => {
    //     // console.log(error);
    //   });
  };

  const campaignsImg = [
    "https://images.unsplash.com/photo-1548102245-c79dbcfa9f92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=996&q=80",
    "https://images.unsplash.com/photo-1588349482083-036b31c6eca3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1537280788811-0cc64e2c028b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1606166187734-a4cb74079037?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  ];

  const { windowSize } = useContext(NewOnsiteChecklistContext);
  const [rowHeight, setRowHeight] = useState(60);

  useEffect(() => {
    if (windowSize.innerHeight <= 666 || windowSize.innerWidth <= 1200) {
      setRowHeight(40);
    } else {
      setRowHeight(60);
    }
  }, [windowSize]);

  return (
    <>
      <UserModal
        isModalOpen={isUserModalOpen}
        setIsModalOpen={setIsUserModalOpen}
        type={userModalType}
        oldValues={rowForEdit}
        availableAssets={dataCampaigns}
        setSelectionModel={setSelectionModelPersonal}
        setSelectedRows={setSelectedUsers}
        setTotalSelected={setTotalSelected}
      />
      <DeleteModal
        isModalOpen={isUserDeleteModalOpen}
        setIsModalOpen={setIsUserDeleteModalOpen}
        selected={selectedUsers}
        setSelectedRows={setSelectedUsers}
        setTotalSelected={setTotalSelected}
        type={"user"}
      />
      <TableActionsHeader
        totalSelected={totalSelected}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        addText={"Campaign"}
        setIsModalOpen={setIsUserModalOpen}
        setIsDeleteModalOpen={setIsUserDeleteModalOpen}
        totalRowsSelected={totalSelected}
        data={dataAllUsers?.results}
        setTableRows={setTableRows}
        tableType={"Campaign"}
        setActionType={setUserModalType}
        isLoading={isLoadingCampaigns || isLoadingAllUsers}
        exportTableToPdf={exportTableToPdf}
        handleOnSearchFieldChange={handleOnSearchFieldChange}
        parentRoute={parentRoute}
      />
      <div
        style={{
          width: "100%",
          marginTop: "30px",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          paddingBottom: 100,
          overflowY: "hidden",
          overflowX: "hidden",
        }}
      >
        {isLoadingCampaigns ? (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <LoadingSpinner />
          </div>
        ) : (
          tableRows.map((campaign, index) => (
            <div
              key={index}
              style={{
                width: "295px",
                backgroundColor: "#fff",
                padding: 10,
                margin: "30px",
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                borderRadius: 10,
                cursor: "pointer",
              }}
              onClick={() =>
                navigate(`/${parentRoute}/campaign/${campaign.id}`, {
                  state: campaign,
                })
              }
            >
              <div>
                <img
                  src={
                    campaign.coverImage
                      ? `${campaign.coverImage}`
                      : campaignsImg[index]
                  }
                  width="295px"
                  style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                />
              </div>
              <p style={{ fontSize: "16px", fontWeight: 600 }}>
                Target Fund: {campaign.targetFunding}
              </p>
              <p style={{ fontSize: "16px", fontWeight: 500 }}>
                Treatment Required: {campaign.treatmentRequired}
              </p>
              <p style={{ fontSize: "16px", fontWeight: 500 }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Status:
                  {campaign.status === "Active" ? (
                    <div
                      style={{
                        backgroundColor: "#32E9DA",
                        padding: "5px",
                        borderRadius: 8,
                        color: "white",
                        marginLeft: "5px",
                      }}
                    >
                      {campaign.status}
                    </div>
                  ) : (
                    <div
                      style={{
                        backgroundColor: "#FFB84C",
                        padding: "5px",
                        borderRadius: 8,
                        color: "white",
                        marginLeft: "5px",
                      }}
                    >
                      {campaign.status}
                    </div>
                  )}
                </div>
              </p>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default CampaignPage;
