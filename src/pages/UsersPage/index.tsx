import React, { useContext, useEffect, useState } from "react";
import TableActionsHeader from "../../components/TableActionsHeader";
import IconButton from "@mui/material/IconButton";
import { DataGrid, GridSelectionModel } from "@mui/x-data-grid";
import { OptionsIcon } from "../../assets";
import { UserTableRow } from "../../types";
import UserModal from "../../components/UserModal";
import { Roles, TABLE_LIMIT } from "../../constants";
import DeleteModal from "../../components/DeleteModal";
import "jspdf-autotable";
import TablePagination from "../../components/Pagination";
import { NewOnsiteChecklistContext } from "../../contexts/NewOnsiteChecklistContext";
import { useStyles } from "../../styles/DataGrid.style";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import moment from "moment";
import { useGetAllUsers } from "../../hooks/useGetAllUsers";
import { useEditUsers } from "../../hooks/useEditUsers";

const UsersPage = ({ parentRoute }: any) => {
  const dataGridStyles = useStyles();
  const [currentOffset, setCurrentOffset] = useState(0);
  const [totalSelected, setTotalSelected] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [tableRows, setTableRows] = useState<any[]>([]);
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [isUserDeleteModalOpen, setIsUserDeleteModalOpen] = useState(false);
  const [userModalType, setUserModalType] = useState("add");
  const [rowForEdit, setRowForEdit] = useState({
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    updated_at: "",
    role: "",
    phone: "",
  });

  const columns = [
    { field: "name", headerName: "Name", minWidth: 250 },

    { field: "email", headerName: "Email", minWidth: 250 },
    {
      field: "gender",
      headerName: "Gender",
      minWidth: 150,
    },
    {
      field: "role",
      headerName: "Role",
      minWidth: 200,
    },
    {
      field: "updated_at",
      headerName: "Last Edited At",
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
          const nameSplit = params.row.name.split(" ");

          const rowData = {
            id: params.row.id,
            firstName: nameSplit[0],
            lastName: nameSplit[1],
            email: params.row.email,
            role: params.role,
            phone: params.phone,
            updated_at: "",
          };

          setRowForEdit(rowData);
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

  const { dataUsers, isLoadingUsers, isSuccess } = useGetAllUsers({});

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

  const exportTableToPdf = () => {};

  const onNextHandler = () => {
    setCurrentOffset((prevState) => prevState + TABLE_LIMIT);
  };

  const onPreviousHandler = () => {
    setCurrentOffset((prevState) => prevState - TABLE_LIMIT);
  };

  useEffect(() => {
    if (dataUsers?.data.length > 0) {
      const tableData: any[] = [];

      console.log(
        dataUsers?.data,
        "dataUsers?.data dataUsers?.data dataUsers?.data"
      );

      dataUsers?.data.forEach((data: any) => {
        tableData.push({
          id: data._id,
          name: `${data.firstName} ${data.lastName}`,
          email: data.email,
          role: data.role?.roleName ? data.role?.roleName : "User",
          updated_at: moment(data.updatedAt).format("MMM D, YYYY HH:mm"),
          gender: data.gender,
        });
      });
      setTableRows(tableData);
    } else {
      setTableRows([]);
    }

    return () => {
      setTableRows([]);
    };
  }, [dataUsers]);

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
        data={tableRows}
        // data={dataAllUsers?.results}
        setTableRows={setTableRows}
        tableType={"users"}
        setActionType={setUserModalType}
        isLoading={isLoadingUsers || isLoadingUsers}
        exportTableToPdf={exportTableToPdf}
        handleOnSearchFieldChange={handleOnSearchFieldChange}
        parentRoute={parentRoute}
      />
      <div className={dataGridStyles.tableContainer}>
        <DataGrid
          rows={tableRows}
          columns={columns}
          rowHeight={rowHeight}
          pageSize={10}
          onSelectionModelChange={onSelectionChangeHandler}
          selectionModel={selectionModelPersonal}
          disableSelectionOnClick
          checkboxSelection
          hideFooter
          loading={isLoadingUsers}
        />
        <TablePagination
          nextDisabled={
            dataUsers?.next === null || isLoadingUsers || isLoadingUsers
          }
          previousDisabled={
            dataUsers?.previous === null || isLoadingUsers || isLoadingUsers
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
