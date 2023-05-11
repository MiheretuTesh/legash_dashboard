import React, { useContext, useEffect, useState } from "react";
import TableActionsHeader from "../../components/TableActionsHeader";
import IconButton from "@mui/material/IconButton";
import { DataGrid, GridSelectionModel } from "@mui/x-data-grid";
import { OptionsIcon } from "../../assets";
import { UserTableRow } from "../../types";
import UserModal from "../../components/UserModal";
import { useGetUsers } from "../../hooks/useGetUsers";
import { useGetHospitals } from "../../hooks/useGetHospitals";
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
    updated_at: "",
    role: "",
  });

  const columns = [
    // {
    //   field: "name",
    //   headerName: "Name",
    //   flex: 0.3,
    //   renderCell: (params: any) => {
    //     const row = params.row;
    //     return (
    //       <div>
    //         {row.first_name}&nbsp;{row.last_name}
    //       </div>
    //     );
    //   },
    // },
    { field: "name", headerName: "Name", minWidth: 250 },

    { field: "email", headerName: "Email", minWidth: 250 },
    {
      field: "role",
      headerName: "Role",
      minWidth: 250,
      // renderCell: (params: any) => {
      //   const row = params.row;
      //   return (
      //     <div>
      //       {row.role === Roles.FundAssetManager
      //         ? "Fund Asset Manager"
      //         : "Engineer"}
      //     </div>
      //   );
      // },
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
          setRowForEdit(params.row);
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

  // const { dataAssets, isLoadingAssets } = useGetHospitals({});
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
    const selectedRowData = dataUsers?.results.filter(
      (row: UserTableRow) => row.id === selectionModel[0]
    );
    if (selectedRowData.length === 1) {
      setRowForEdit(selectedRowData[0]);
    }
    setSelectedUsers(selectionModel);
    setTotalSelected(selectionModel.length);
  };

  const exportTableToPdf = () => {
    const doc = new jsPDF("portrait", "pt", "A4");
    doc.setFontSize(15);
    const data = dataAllUsers?.results.map((user: any) => [
      `${user.first_name} ${user.last_name}`,
      user.email,
      user.type,
    ]);

    const content = {
      startY: 50,
      head: [["Name", "Email", "Role", "Assets"]],
      body: data,
    };

    doc.text("User Report Table", 40, 40);

    (doc as any).autoTable(content);
    doc.save(`${Date.now()}-user-report.pdf`);
  };

  const onNextHandler = () => {
    setCurrentOffset((prevState) => prevState + TABLE_LIMIT);
  };

  const onPreviousHandler = () => {
    setCurrentOffset((prevState) => prevState - TABLE_LIMIT);
  };

  // useEffect(() => {
  //   if (dataUsers?.results.length > 0) {
  //     const tableData: UserTableRow[] = [];

  //     dataUsers?.results.forEach((data: any) => {
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
  //   } else {
  //     setTableRows([]);
  //   }

  //   return () => {
  //     setTableRows([]);
  //   };
  // }, [dataUsers]);

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
    //         role: data.role,
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
    console.log({ test: windowSize.innerWidth });
    if (windowSize.innerHeight <= 666 || windowSize.innerWidth <= 1200) {
      setRowHeight(40);
    } else {
      setRowHeight(60);
    }
  }, [windowSize]);

  const users: UserTableRow[] = [
    {
      id: 1,
      name: "Abebe Tesfa",
      email: "abebe@gmail.com",
      role: "Admin",
      updated_at: "April 9, 2019",
      edited_by: "Abebe Tesfa",
    },
    {
      id: 2,
      name: "Kebede Atnafu",
      email: "kebede@gmail.com",
      role: "Admin",
      updated_at: "April 9, 2019",
      edited_by: "Abebe Tesfa",
    },
    {
      id: 3,
      name: "Gezachew Aschenaki",
      email: "geza@gmail.com",
      role: "Hospital Admin",
      updated_at: "April 9, 2019",
      edited_by: "Abebe Tesfa",
    },
    {
      id: 4,
      name: "Kurabachew Getahun",
      email: "kura@gmail.com",
      role: "User",
      updated_at: "April 9, 2019",
      edited_by: "Abebe Tesfa",
    },
    {
      id: 5,
      name: "Genet Meshesha",
      email: "geni@gmail.com",
      role: "User",
      updated_at: "April 9, 2019",
      edited_by: "Abebe Tesfa",
    },
  ];

  return (
    <>
      <UserModal
        isModalOpen={isUserModalOpen}
        setIsModalOpen={setIsUserModalOpen}
        type={userModalType}
        oldValues={rowForEdit}
        availableAssets={[]}
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
        addText={"user"}
        setIsModalOpen={setIsUserModalOpen}
        setIsDeleteModalOpen={setIsUserDeleteModalOpen}
        totalRowsSelected={totalSelected}
        data={users}
        // data={dataAllUsers?.results}
        setTableRows={setTableRows}
        tableType={"users"}
        setActionType={setUserModalType}
        isLoading={isLoadingUsers || isLoadingAllUsers}
        exportTableToPdf={exportTableToPdf}
        handleOnSearchFieldChange={handleOnSearchFieldChange}
        parentRoute={parentRoute}
      />
      <div className={dataGridStyles.tableContainer}>
        <DataGrid
          rows={users}
          columns={columns}
          rowHeight={rowHeight}
          pageSize={5}
          onSelectionModelChange={onSelectionChangeHandler}
          selectionModel={selectionModelPersonal}
          disableSelectionOnClick
          checkboxSelection
          hideFooter
          // loading={isLoadingUsers || isLoadingAssets || isLoadingAllUsers}
        />
        <TablePagination
          nextDisabled={
            dataUsers?.next === null || isLoadingUsers || isLoadingAllUsers
          }
          previousDisabled={
            dataUsers?.previous === null || isLoadingUsers || isLoadingAllUsers
          }
          onPreviousHandler={onPreviousHandler}
          onNextHandler={onNextHandler}
          currentPage={currentOffset / TABLE_LIMIT + 1}
          setCurrentOffset={setCurrentOffset}
          total={dataUsers?.count}
        />
      </div>
    </>
  );
};

export default UsersPage;
