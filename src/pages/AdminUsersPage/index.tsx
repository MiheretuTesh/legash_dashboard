import React, { useContext, useEffect, useState } from "react";
import TableActionsHeader from "../../components/TableActionsHeader";
import IconButton from "@mui/material/IconButton";
import { DataGrid, GridSelectionModel } from "@mui/x-data-grid";
import { OptionsIcon } from "../../assets";
import { UserTableRow } from "../../types";
import UserModal from "../../components/UserModal";
import { useGetUsers } from "../../hooks/useGetUsers";
import { useGetAssets } from "../../hooks/useGetAssets";
import { Roles, TABLE_LIMIT } from "../../constants";
import DeleteModal from "../../components/DeleteModal";
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

const UsersPage = ({ parentRoute }: any) => {
  const dataGridStyles = useStyles();
  const [currentOffset, setCurrentOffset] = useState(0);
  const [totalSelected, setTotalSelected] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [tableRows, setTableRows] = useState<UserTableRow[]>([]);
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [isUserDeleteModalOpen, setIsUserDeleteModalOpen] = useState(false);
  const [userModalType, setUserModalType] = useState("add");
  const [rowForEdit, setRowForEdit] = useState({
    id: 0,
    first_name: "",
    last_name: "",
    email: "",
    type: "",
    user_assets: "",
    updated_at: "",
  });

  const columns = [
    // {
    //   field: "name",
    //   headerName: "Name",
    //   flex: 0.3,
    //   renderCell: (params: any) => {
    //     const row = params.row;
    //     return (
    //         <div>
    //           {row.first_name}&nbsp;{row.last_name}
    //         </div>
    //     );
    //   },
    // },
    { field: "email", headerName: "Email", minWidth: 250 },
    {
      field: "type",
      headerName: "Role",
      minWidth: 250,
      renderCell: (params: any) => {
        const row = params.row;
        switch (row.role) {
          case Roles.Admin:
            return "Admin";
          case Roles.FundAssetManagerAdmin:
            return "Fund Asset Manager Admin";
          case Roles.FundAssetManager:
            return "Fund Asset Manager";
          case Roles.Engineer:
            return "Engineer";
        }
        // return (
        //   <div>
        //     {
        //       row.role === Roles.FundAssetManagerAdmin
        //       ? "Fund Asset Manager Admin"
        //       : row.role === Roles.FundAssetManager
        //       ? "Fund Asset Manage"
        //       : "Engineer"
        //     }
        //   </div>
        // );
      },
    },
    {
      field: "user_assets",
      headerName: "Assets",
      minWidth: 130,
    },
    {
      field: "updated_at",
      headerName: "Last Edited At",
      minWidth: 180,
    },
    {
      field: "edited_by",
      headerName: "Last Edited By",
      minWidth: 180,
    },
    {
      field: "action",
      headerName: "",
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params: any) => {
        const onEditHandler = () => {
          setUserModalType("edit");
          setRowForEdit({
            ...params.row,
            first_name: params.row.user.split(" ")[0],
            last_name: params.row.user.split(" ")[1],
          });
          setIsUserModalOpen(true);
        };

        const onDeleteHandler = () => {
          setSelectedUsers([params.row.id]);
          setIsUserDeleteModalOpen(true);
        };

        return (
          <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState: any) => (
              <React.Fragment>
                <IconButton
                  sx={{ width: 30, height: 30, padding: "5px" }}
                  {...bindTrigger(popupState)}
                >
                  <OptionsIcon />
                </IconButton>
                <Menu {...bindMenu(popupState)}>
                  <MenuItem
                    onClick={() => {
                      popupState.close();
                      onEditHandler();
                    }}
                  >
                    Edit
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      popupState.close();
                      onDeleteHandler();
                    }}
                  >
                    Delete
                  </MenuItem>
                </Menu>
              </React.Fragment>
            )}
          </PopupState>
        );
      },
      flex: 0.01,
    },
  ];

  const [selectionModelPersonal, setSelectionModelPersonal] =
    useState<GridSelectionModel>([]);

  const [selectedUsers, setSelectedUsers] = useState<GridSelectionModel>();

  const { dataAssets, isLoadingAssets } = useGetAssets({});
  const { dataUsers, isLoadingUsers } = useGetUsers({
    limit: TABLE_LIMIT,
    offset: currentOffset,
  });
  const { dataUsers: dataAllUsers, isLoadingUsers: isLoadingAllUsers } =
    useGetUsers({});

  // const {
  //   userSearchData,
  //   // userSearchIsLoading,
  //   userSearchIsSuccess,
  //   userSearchRefetch
  // } = useGetUserSearch({search_value: searchValue});

  // useEffect(() => {
  //   if (searchValue === "") {
  //     if (dataUsers) {
  //       const tableData: UserTableRow[] = [];
  //       dataUsers.results.forEach((data: any) => {
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
  // }, [userSearchIsSuccess, userSearchData, dataUsers, searchValue]);

  const onSelectionChangeHandler = (
    selectionModel: GridSelectionModel,
    details: any
  ) => {
    setSelectionModelPersonal(selectionModel);
    const selectedRowData = dataUsers?.results.filter(
      (row: UserTableRow) => row.id === selectionModel[0]
    );

    if (selectedRowData.length === 1) {
      setRowForEdit(selectedRowData[0]);
    }
    setSelectedUsers(selectionModel);
    setTotalSelected(selectionModel.length);
  };

  const onNextHandler = () => {
    setCurrentOffset((prevState) => prevState + TABLE_LIMIT);
  };

  const onPreviousHandler = () => {
    setCurrentOffset((prevState) => prevState - TABLE_LIMIT);
  };

  const exportTableToPdf = () => {
    const doc = new jsPDF("portrait", "pt", "A4");
    doc.setFontSize(15);
    const data = dataAllUsers?.results.map((user: any) => [
      `${user.first_name} ${user.last_name}`,
      user.email,
      user.type,
      user.user_assets.toString(),
    ]);

    const content = {
      startY: 50,
      head: [["Name", "Email", "Role", "Assets"]],
      body: data,
    };

    doc.text("Admin User Report Table", 40, 40);

    (doc as any).autoTable(content);
    doc.save(`${Date.now()}-admin-user-report.pdf`);
  };

  useEffect(() => {
    if (dataUsers) {
      const tableData: UserTableRow[] = [];
      dataUsers?.results.forEach((data: any) => {
        tableData.push({
          assets: "",
          id: data.id,
          user: `${data.first_name} ${data.last_name}`,
          email: data.email,
          role: data.type,
          updated_at: moment(data.updated_at).format("MMM D, YYYY HH:mm"),
        });
      });
      setTableRows(tableData);
    }
    return () => {
      setTableRows([]);
    };
  }, [dataUsers]);

  const handleOnSearchFieldChange = (e: any) => {
    setSearchValue((prevName) => e.target.value);
    fetch(``, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((users: any) => {
        const tableData: UserTableRow[] = [];
        users?.results.forEach((data: any) => {
          tableData.push({
            assets: "",
            id: data.id,
            user: `${data.first_name} ${data.last_name}`,
            email: data.email,
            role: data.type,
            updated_at: moment(data.updated_at).format("MMM D, YYYY HH:mm"),
          });
        });
        setTableRows(tableData);
      })
      .catch((error) => {
        // console.log(error);
      });
  };

  const hospitals = [
    {
      id: 1,
      name: "Yekatit 12 Hospital",
      location: "6kilo, Addis Ababa",
      status: "Active",
      img: "https://images.unsplash.com/photo-1632833239869-a37e3a5806d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8SG9zcGl0YWxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      name: "Zewditu",
      location: "Ambassador, Addis Ababa",
      status: "Active",
      img: "https://www.gov.pl/photo/format/3c61445f-16f1-4a7b-8198-0da5290caa45/resolution/1920x810",
    },
    {
      id: 3,
      name: "Russia Hospital",
      location: "Ledeta, Addis Ababa",
      status: "Active",
      img: "https://static.themoscowtimes.com/image/article_1360/52/77873c8c98bf4ce8822acd65bc7831cb.jpg",
    },
    {
      id: 1,
      name: "Menilike Hospital",
      location: "Menilike, Addis Ababa",
      status: "Active",
      img: "https://be.gotolike.com/ajax/images/location_photos_9614_9_28373359.png",
    },
    {
      id: 1,
      name: "St. Paul Hospital",
      location: "Asko, Addis Ababa",
      status: "Active",
      img: "https://quod.lib.umich.edu/c/cirht/images/mpub9712319-hospital.jpg",
    },
    {
      id: 1,
      name: "Black Lion Hospital",
      location: "Piazza, Addis Ababa",
      status: "Active",
      img: "https://www.thereporterethiopia.com/wp-content/uploads/2022/12/Black-Lion-to-construct-private-hospital-to-attain-autonomy-min.jpg",
    },
    {
      id: 1,
      name: "St. Luke Hospital",
      location: "Woliso",
      status: "Active",
      img: "https://www.drzavatta.it/wp-content/uploads/2017/11/wolisso-1.jpg",
    },
    {
      id: 1,
      name: "Alert Hospital",
      location: "Zewditu, Addis Ababa",
      status: "Active",
      img: "https://be.gotolike.com/ajax/images/location_photos_9614_9_28373359.png",
    },
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
        availableAssets={dataAssets}
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
        data={dataAllUsers?.results}
        setTableRows={setTableRows}
        tableType={"users"}
        setActionType={setUserModalType}
        isLoading={isLoadingUsers || isLoadingAssets || isLoadingAllUsers}
        exportTableToPdf={exportTableToPdf}
        handleOnSearchFieldChange={handleOnSearchFieldChange}
        parentRoute={parentRoute}
      />
      <div className={dataGridStyles.tableContainer}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "space-between",
            flexWrap: "wrap",
          }}
        >
          {hospitals.map((hospital, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                width: "280px",
                backgroundColor: "#fff",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                padding: "20px",
                borderRadius: "10px",
                margin: "30px 20px",
              }}
            >
              <img src={`${hospital.img}`} height="200" />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  // width: "100%",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <span style={{ fontWeight: "700", fontSize: "20px" }}>
                  {hospital.name}
                </span>
                <h4>{hospital.location}</h4>
              </div>
            </div>
          ))}
        </div>
        {/* <DataGrid
          rows={tableRows}
          columns={columns}
          rowHeight={rowHeight}
          pageSize={5}
          onSelectionModelChange={onSelectionChangeHandler}
          selectionModel={selectionModelPersonal}
          disableSelectionOnClick
          checkboxSelection
          hideFooter
          loading={isLoadingUsers || isLoadingAssets || isLoadingAllUsers}
        />
        <TablePagination
          nextDisabled={
            dataUsers?.next === null ||
            isLoadingUsers ||
            isLoadingAssets ||
            isLoadingAllUsers
          }
          previousDisabled={
            dataUsers?.previous === null ||
            isLoadingUsers ||
            isLoadingAssets ||
            isLoadingAllUsers
          }
          onPreviousHandler={onPreviousHandler}
          onNextHandler={onNextHandler}
          currentPage={currentOffset / TABLE_LIMIT + 1}
          setCurrentOffset={setCurrentOffset}
          total={dataUsers?.count}
        /> */}
      </div>
    </>
  );
};

export default UsersPage;
