import React, { useContext, useEffect, useState } from "react";
import TableActionsHeader from "../../components/TableActionsHeader";
import { IconButton } from "@mui/material";
import { DataGrid, GridSelectionModel } from "@mui/x-data-grid";
import { OptionsIcon } from "../../assets";
import { AssetTableRow } from "../../types";
import BuildingModal from "../../components/BuildingModal";
import { useGetUsers } from "../../hooks/useGetUsers";
import { useGetAssets } from "../../hooks/useGetAssets";
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
  });

  const [selectionModelPersonal, setSelectionModelPersonal] =
    useState<GridSelectionModel>([]);

  const [selectedAssets, setSelectedAssets] = useState<GridSelectionModel>();
  const [isAbleToDelete] = useState(true);

  const { dataUsers, isLoadingUsers } = useGetUsers({});
  const { dataAssets, isLoadingAssets } = useGetAssets({
    limit: TABLE_LIMIT,
    offset: currentOffset,
  });

  // const {
  //   assetSearchData,
  //   assetSearchIsLoading,
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

  const { dataAssets: dataAllAssets, isLoadingAssets: isLoadingAllAssets } =
    useGetAssets({});

  const { dataUserProfile } = useGetUserProfileData({});

  const columns = [
    { field: "building", headerName: "Building", minWidth: 230 },
    {
      field: "location",
      headerName: "Location",
      minWidth: 140,
    },
    { field: "details", headerName: "Details", minWidth: 260 },
    { field: "updated_at", headerName: "Last Edited At", minWidth: 180 },
    { field: "edited_by", headerName: "Last Edited By", minWidth: 150 },
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
    setSelectionModelPersonal(selectionModel);
    const selectedRowData = dataAssets?.results.filter(
      (row: AssetTableRow) => row.id === selectionModel[0]
    );

    if (selectedRowData.length === 1) {
      setRowForEdit(selectedRowData[0]);
    }
    setSelectedAssets(selectionModel);
    setTotalSelected(selectionModel.length);
  };

  const exportTableToPdf = () => {
    const doc = new jsPDF("portrait", "pt", "A4");
    doc.setFontSize(15);
    const data = dataAllAssets?.results.map((user: any) => [
      user.building,
      user.location,
      user.details,
    ]);

    const content = {
      startY: 50,
      head: [["Building", "Location", "Details"]],
      body: data,
    };

    doc.text("Admin Assets Report Table", 40, 40);

    (doc as any).autoTable(content);
    doc.save(`${Date.now()}-admin-assets-report.pdf`);
  };

  const onNextHandler = () => {
    setCurrentOffset((prevState) => prevState + 5);
  };

  const onPreviousHandler = () => {
    setCurrentOffset((prevState) => prevState - 5);
  };

  useEffect(() => {
    if (dataAssets) {
      const tableData: AssetTableRow[] = [];

      dataAssets.results.forEach((data: any) => {
        tableData.push({
          id: data.id,
          building: data.building,
          details: data.details,
          updated_at: moment(data.updated_at).format("MMM D, YYYY HH:mm"),
          location: data.location,
          assumptions: "",
          edited_by: data.edited_by_email,
          users: data.users,
        });
      });

      setTableRows(tableData);
    }

    return () => {
      setTableRows([]);
    };
  }, [dataAssets]);

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
            edited_by: data.edited_by_email,
            users: data.users,
          });
        });

        setTableRows(tableData);
      })
      .catch((error) => {
        // console.log(error);
      });
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
        userId={dataUserProfile?.id}
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
        data={dataAllAssets?.results}
        setTableRows={setTableRows}
        tableType={"assets"}
        setActionType={setAssetModalType}
        isLoading={isLoadingUsers || isLoadingAssets || isLoadingAllAssets}
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
          loading={isLoadingUsers || isLoadingAssets || isLoadingAllAssets}
        />
        <TablePagination
          nextDisabled={
            dataAssets?.next === null ||
            isLoadingUsers ||
            isLoadingAssets ||
            isLoadingAllAssets
          }
          previousDisabled={
            dataAssets?.previous === null ||
            isLoadingUsers ||
            isLoadingAssets ||
            isLoadingAllAssets
          }
          onPreviousHandler={onPreviousHandler}
          onNextHandler={onNextHandler}
          currentPage={currentOffset / TABLE_LIMIT + 1}
          setCurrentOffset={setCurrentOffset}
          total={dataAssets?.count}
        />
      </div>
    </>
  );
};

export default Assets;
