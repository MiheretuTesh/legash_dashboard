import React, { useContext, useEffect, useState } from "react";
import TableActionsHeader from "../../components/TableActionsHeader";
import IconButton from "@mui/material/IconButton";
import { DataGrid, GridSelectionModel } from "@mui/x-data-grid";
import { OptionsIcon } from "../../assets";
import { UserTableRow } from "../../types";
import UserModal from "../../components/UserModal";
// import { useGetUsers } from "../../hooks/useGetUsers";
import { useGetHospitals } from "../../hooks/useGetHospitals";
import { Roles, TABLE_LIMIT } from "../../constants";
import DeleteModal from "../../components/DeleteModal";
import { useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import "jspdf-autotable";
import TablePagination from "../../components/Pagination";
import { NewOnsiteChecklistContext } from "../../contexts/NewOnsiteChecklistContext";
import { useStyles } from "../../styles/DataGrid.style";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import moment from "moment";
// import { useGetUserSearch } from "../../hooks/useGetUserSearch"

const HospitalPage = ({ parentRoute }: any) => {
  const styles = useStyles();
  const navigate = useNavigate();
  const [currentOffset, setCurrentOffset] = useState(0);
  const [totalSelected, setTotalSelected] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [hospitalsData, setHospitalsData] = useState<any[]>([]);
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

  const { dataHospitals, isLoadingHospitals } = useGetHospitals({});

  console.log(dataHospitals, "dataHospitals dataHospitals dataHospitals");
  // const { dataUsers, isLoadingUsers } = useGetUsers({
  //   limit: TABLE_LIMIT,
  //   offset: currentOffset,
  // });
  // const { dataUsers: dataAllUsers, isLoadingUsers: isLoadingAllUsers } =
  //   useGetUsers({});

  // const {
  //   userSearchData,
  //   // userSearchIsLoading,
  //   userSearchIsSuccess,
  //   userSearchRefetch
  // } = useGetUserSearch({search_value: searchValue});

  // useEffect(() => {
  //   if(searchValue === ""){
  //     if (dataAssets) {
  //       const tableData: UserTableRow[] = [];
  //       dataUsers?.results.forEach((data: any) => {
  //         tableData.push({
  //           assets: "",
  //           id: data.id,
  //           user: `${data.first_name} ${data.last_name}`,
  //           email: data.email,
  //           role: data.type,
  //           updated_at: moment(data.updated_at).format("MMM D, YYYY HH:mm"),
  //           user_assets: data.user_assets.toString(),
  //         });
  //       });
  //       setTableRows(tableData);
  //     }
  //   }
  //   if(userSearchIsSuccess === true && userSearchData !== undefined){
  //     if (userSearchData?.data.results) {
  //       const tableData: UserTableRow[] = [];
  //       userSearchData?.data.results.forEach((data: any) => {
  //         tableData.push({
  //           assets: "",
  //           id: data.id,
  //           user: `${data.first_name} ${data.last_name}`,
  //           email: data.email,
  //           role: data.type,
  //           updated_at: moment(data.updated_at).format("MMM D, YYYY HH:mm"),
  //           user_assets: data.user_assets.toString(),
  //         });
  //       });
  //       setTableRows(tableData);
  //     }
  //   }
  // }, [userSearchIsSuccess, userSearchData, dataAssets, searchValue, dataUsers]);

  const onSelectionChangeHandler = (
    selectionModel: GridSelectionModel,
    details: any
  ) => {
    setSelectionModelPersonal(selectionModel);
    // const selectedRowData = dataUsers?.results.filter(
    //   (row: UserTableRow) => row.id === selectionModel[0]
    // );
    // if (selectedRowData.length === 1) {
    //   setRowForEdit(selectedRowData[0]);
    // }
    // setSelectedUsers(selectionModel);
    // setTotalSelected(selectionModel.length);
  };

  const exportTableToPdf = () => {
    // const doc = new jsPDF("portrait", "pt", "A4");
    // doc.setFontSize(15);
    // const data = dataAllUsers?.results.map((user: any) => [
    //   `${user.first_name} ${user.last_name}`,
    //   user.email,
    //   user.type,
    // ]);
    // const content = {
    //   startY: 50,
    //   head: [["Name", "Email", "Role", "Assets"]],
    //   body: data,
    // };
    // doc.text("User Report Table", 40, 40);
    // (doc as any).autoTable(content);
    // doc.save(`${Date.now()}-user-report.pdf`);
  };

  const onNextHandler = () => {
    setCurrentOffset((prevState) => prevState + TABLE_LIMIT);
  };

  const onPreviousHandler = () => {
    setCurrentOffset((prevState) => prevState - TABLE_LIMIT);
  };

  console.log(dataHospitals?.data.hospitals, "Hello Hospitals");

  useEffect(() => {
    if (dataHospitals?.data.hospitals.length > 0) {
      const tableData: any[] = [];

      dataHospitals?.data.hospitals.forEach((data: any) => {
        tableData.push({
          id: data.id,
          name: data.name,
          email: data.email,
          role: data.type,
          updated_at: moment(data.updatedAt).format("MMM D, YYYY HH:mm"),
          bankAccounts: data.bankAccounts,
          phone: data.phone,
          location: `${data.location.address} ${data.location.city}`,
          status: "Active",
        });
      });
      setHospitalsData(tableData);
    } else {
      setHospitalsData([]);
    }
    return () => {
      setHospitalsData([]);
    };
  }, [dataHospitals]);

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

  const { windowSize } = useContext(NewOnsiteChecklistContext);
  const [rowHeight, setRowHeight] = useState(60);

  useEffect(() => {
    if (windowSize.innerHeight <= 666 || windowSize.innerWidth <= 1200) {
      setRowHeight(40);
    } else {
      setRowHeight(60);
    }
  }, [windowSize]);

  console.log(hospitalsData, "hospitalsData hospitalsData hospitalsData");

  const hospitals = [
    {
      id: 1,
      name: "Minileke Hospital",
      location: "Minilike",
      status: true,
      staffMembers: ["Abebe Sisay", "Embet Getu"],
      img: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG9zcGl0YWwlMjBidWlsZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 1,
      name: "Yekatit 12 Hospital",
      location: "6 kilo",
      status: true,
      staffMembers: ["Abebe Sisay", "Embet Getu"],
      img: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG9zcGl0YWwlMjBidWlsZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 1,
      name: "Alert Hospital",
      location: "Zewditu",
      status: true,
      staffMembers: ["Abebe Sisay", "Embet Getu"],
      img: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG9zcGl0YWwlMjBidWlsZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 1,
      name: "Black Lion Hospital",
      location: "Piazza",
      status: true,
      staffMembers: ["Abebe Sisay", "Embet Getu"],
      img: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG9zcGl0YWwlMjBidWlsZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 1,
      name: "Minileke Hospital",
      location: "Minilike",
      status: true,
      staffMembers: ["Abebe Sisay", "Embet Getu"],
      img: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG9zcGl0YWwlMjBidWlsZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 1,
      name: "Minileke Hospital",
      location: "Minilike",
      status: true,
      staffMembers: ["Abebe Sisay", "Embet Getu"],
      img: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG9zcGl0YWwlMjBidWlsZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
  ];

  return (
    <>
      <UserModal
        isModalOpen={isUserModalOpen}
        setIsModalOpen={setIsUserModalOpen}
        type={userModalType}
        oldValues={rowForEdit}
        availableAssets={dataHospitals}
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
        addText={"Hospital"}
        setIsModalOpen={setIsUserModalOpen}
        setIsDeleteModalOpen={setIsUserDeleteModalOpen}
        totalRowsSelected={totalSelected}
        data={[]}
        setTableRows={setHospitalsData}
        tableType={"Hospital"}
        setActionType={setUserModalType}
        isLoading={isLoadingHospitals}
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
        {hospitalsData.map((hospital, index) => (
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
            onClick={() => navigate(`/${parentRoute}/campaign/1`)}
          >
            <div>
              <img
                src={
                  hospital.img
                    ? `${hospital.img}`
                    : "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG9zcGl0YWwlMjBidWlsZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                }
                width="295px"
                style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
              />
            </div>
            <p style={{ fontSize: "16px", fontWeight: 600 }}>
              Name: {hospital.name}
            </p>
            <p style={{ fontSize: "16px", fontWeight: 500 }}>
              Location: {hospital.location}
            </p>
            <p style={{ fontSize: "16px", fontWeight: 500 }}>
              Status: {hospital.status}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default HospitalPage;
