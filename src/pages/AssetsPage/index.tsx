import React, { useContext, useEffect, useState } from "react";
import TableActionsHeader from "../../components/TableActionsHeader";
import { IconButton } from "@mui/material";
import { DataGrid, GridSelectionModel } from "@mui/x-data-grid";
import { OptionsIcon } from "../../assets";
import { AssetTableRow } from "../../types";
import BuildingModal from "../../components/BuildingModal";
import { useGetUsers } from "../../hooks/useGetUsers";
import { useGetHospitals } from "../../hooks/useGetHospitals";
import { TABLE_LIMIT } from "../../constants";
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
import { useGetUserProfileData } from "../../hooks/useGetUserProfile";
// import { useGetAssetSearch } from "../../hooks/useGetAssetSearch";

const Assets = ({ parentRoute }: any) => {
  const dataGridStyles = useStyles();
  const [currentOffset, setCurrentOffset] = useState(0);
  const [totalSelected, setTotalSelected] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [tableRows, setTableRows] = useState<AssetTableRow[]>([]);
  const [isAssetModalOpen, setIsAssetModalOpen] = useState(false);
  const [isAssetDeleteModalOpen, setIsAssetDeleteModalOpen] = useState(false);
  const [assetModalType, setAssetModalType] = useState("add");
  const [rowForEdit, setRowForEdit] = useState<AssetTableRow>({
    id: 0,
    building: "",
    location: "",
    details: "",
    assumptions: "",
    edited_by: "",
    updated_at: "",
    users: [],
    created_by: 0,
  });

  const [selectionModelPersonal, setSelectionModelPersonal] =
    useState<GridSelectionModel>([]);

  const [selectedAssets, setSelectedAssets] = useState<GridSelectionModel>();
  const [isAbleToDelete, setIsAbleToDelete] = useState(true);

  const { dataUsers, isLoadingUsers } = useGetUsers({});
  // const { dataAssets, isLoadingAssets } = useGetHospitals({
  //   // limit: TABLE_LIMIT,
  //   // offset: currentOffset,
  // });
  // const { dataAssets: dataAllAssets, isLoadingAssets: isLoadingAllAssets } =
  //   useGetHospitals({});

  // const {
  //   assetSearchData,
  //   // assetSearchIsLoading,
  //   assetSearchIsSuccess,
  //   assetSearchRefetch
  // } = useGetAssetSearch({search_value: searchValue});

  // useEffect(() => {
  //   console.log(assetSearchData?.data.results);
  //   if(searchValue === ""){
  //     if (dataAssets) {
  //       const tableData: AssetTableRow[] = [];
  //       dataAssets.results.forEach((data: any) => {
  //         tableData.push({
  //           id: data.id,
  //           building: data.building,
  //           details: data.details,
  //           updated_at: moment(data.updated_at).format("MMM D, YYYY HH:mm"),
  //           location: data.location,
  //           assumptions: "",
  //           edited_by: data.edited_by_email,
  //           users: data.users,
  //         });
  //       });
  //       setTableRows(tableData);
  //     }
  //   }
  //   if(assetSearchIsSuccess === true && assetSearchData !== undefined){
  //     if (assetSearchData?.data.results) {
  //       const tableData: AssetTableRow[] = [];
  //       assetSearchData?.data.results.forEach((data: any) => {
  //         tableData.push({
  //           id: data.id,
  //           building: data.building,
  //           details: data.details,
  //           updated_at: moment(data.updated_at).format("MMM D, YYYY HH:mm"),
  //           location: data.location,
  //           assumptions: "",
  //           edited_by: data.edited_by_email,
  //           users: data.users,
  //         });
  //       });
  //       setTableRows(tableData);
  //     }
  //   }
  // }, [assetSearchIsSuccess, assetSearchData, dataAssets, searchValue]);

  // const { dataUserProfile } = useGetUserProfileData({});

  const columns = [
    { field: "building", headerName: "Building", flex: 0.3 },
    { field: "location", headerName: "Location", flex: 0.3 },
    { field: "details", headerName: "Details", flex: 0.6 },
    { field: "updated_at", headerName: "Last Edited At", flex: 0.5 },
    { field: "edited_by", headerName: "Last Edited By", flex: 0.3 },
    {
      field: "action",
      headerName: "",
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params: any) => {
        const onEditHandler = () => {
          setAssetModalType("edit");
          setRowForEdit(params.row);
          setIsAssetModalOpen(true);
        };

        const onDeleteHandler = () => {
          // if (params.row.created_by === dataUserProfile.id) {
          //   setIsAbleToDelete(true);
          // } else {
          //   setIsAbleToDelete(false);
          // }
          setSelectedAssets([params.row.id]);
          setIsAssetDeleteModalOpen(true);
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

  const onSelectionChangeHandler = (
    selectionModel: GridSelectionModel,
    details: any
  ) => {
    // setSelectionModelPersonal(selectionModel);
    // const selectedRowData = dataAssets?.results.filter(
    //   (row: AssetTableRow) => row.id === selectionModel[0]
    // );
    // if (selectedRowData.length === 1) {
    //   setRowForEdit(selectedRowData[0]);
    // }
    // setSelectedAssets(selectionModel);
    // setTotalSelected(selectionModel.length);
    // for (let i = 0; i <= dataAssets?.results.length; i++) {
    //   if (dataAssets?.results[i]) {
    //     if (selectionModel.includes(dataAssets?.results[i].id)) {
    //       if (dataAssets?.results[i].created_by !== dataUserProfile.id) {
    //         setIsAbleToDelete(false);
    //         break;
    //       } else {
    //         setIsAbleToDelete(true);
    //       }
    //     }
    //   }
    // }
  };

  const onNextHandler = () => {
    setCurrentOffset((prevState) => prevState + TABLE_LIMIT);
  };

  const onPreviousHandler = () => {
    setCurrentOffset((prevState) => prevState - TABLE_LIMIT);
  };

  // useEffect(() => {
  //   if (dataAssets) {
  //     const tableData: AssetTableRow[] = [];

  //     if (dataAssets.results.length > 0) {
  //       dataAssets.results.forEach((data: any) => {
  //         tableData.push({
  //           id: data.id,
  //           building: data.building,
  //           details: data.details,
  //           updated_at: moment(data.updated_at).format("MMM D, YYYY HH:mm"),
  //           location: data.location,
  //           assumptions: "",
  //           edited_by: data.edited_by,
  //           users: data.users,
  //           created_by: data.created_by,
  //         });
  //       });
  //       setTableRows(tableData);
  //     } else {
  //       setTableRows([]);
  //     }
  //   }

  //   return () => {
  //     setTableRows([]);
  //   };
  // }, [dataAssets]);

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
      .then((assets: any) => {
        const tableData: AssetTableRow[] = [];

        assets?.results.forEach((data: any) => {
          tableData.push({
            id: data.id,
            building: data.building,
            details: data.details,
            updated_at: moment(data.updated_at).format("MMM D, YYYY HH:mm"),
            location: data.location,
            assumptions: "",
            edited_by: data.edited_by,
            users: data.users,
            created_by: data.created_by,
          });
        });
        setTableRows(tableData);
      })
      .catch((error) => {
        // console.log(error);
      });
  };

  const exportTableToPdf = () => {
    // const doc = new jsPDF("portrait", "pt", "A4");
    // doc.setFontSize(15);
    // const data = dataAllAssets?.results.map((user: any) => [
    //   user.building,
    //   user.location,
    //   user.details,
    // ]);
    // const content = {
    //   startY: 50,
    //   head: [["Building", "Location", "Details"]],
    //   body: data,
    // };
    // doc.text("Assets Report Table", 40, 40);
    // (doc as any).autoTable(content);
    // doc.save(`${Date.now()}-assets-report.pdf`);
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
      <BuildingModal
        isModalOpen={isAssetModalOpen}
        setIsModalOpen={setIsAssetModalOpen}
        type={assetModalType}
        oldValues={rowForEdit}
        availableUsers={dataUsers}
        setSelectionModel={setSelectionModelPersonal}
        setSelectedRows={setSelectedAssets}
        setTotalSelected={setTotalSelected}
      />
      <DeleteModal
        isModalOpen={isAssetDeleteModalOpen}
        setIsModalOpen={setIsAssetDeleteModalOpen}
        selected={selectedAssets}
        setSelectedRows={setSelectedAssets}
        setTotalSelected={setTotalSelected}
        type={"asset"}
        isAbleToDelete={isAbleToDelete}
      />
      <TableActionsHeader
        totalSelected={totalSelected}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        addText={"building"}
        setIsModalOpen={setIsAssetModalOpen}
        setIsDeleteModalOpen={setIsAssetDeleteModalOpen}
        totalRowsSelected={totalSelected}
        data={[]}
        setTableRows={setTableRows}
        tableType={"assets"}
        setActionType={setAssetModalType}
        isLoading={isLoadingUsers}
        exportTableToPdf={exportTableToPdf}
        handleOnSearchFieldChange={handleOnSearchFieldChange}
        parentRoute={parentRoute}
      />
      <div className={dataGridStyles.tableContainer}>
        <DataGrid
          rows={tableRows}
          columns={columns}
          rowHeight={rowHeight}
          pageSize={5}
          onSelectionModelChange={onSelectionChangeHandler}
          selectionModel={selectionModelPersonal}
          disableSelectionOnClick
          checkboxSelection
          hideFooter
          loading={isLoadingUsers}
        />
        <TablePagination
          nextDisabled={isLoadingUsers}
          previousDisabled={isLoadingUsers}
          onPreviousHandler={onPreviousHandler}
          onNextHandler={onNextHandler}
          currentPage={currentOffset / TABLE_LIMIT + 1}
          setCurrentOffset={setCurrentOffset}
          total={0}
        />
      </div>
    </>
  );
};

export default Assets;
