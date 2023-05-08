import { DataGrid } from "@mui/x-data-grid";
import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useGetAssetsDraftForms } from "../../hooks/useGetAssetsDraftForms";
import { DraftFormsTableRow } from "../../types";
import TablePagination from "../Pagination";
import SearchBar from "../SearchBar";
import { useStyles } from "../../styles/DataGrid.style";
import { NewOnsiteChecklistContext } from "../../contexts/NewOnsiteChecklistContext";
import { TABLE_LIMIT } from "../../constants";
import moment from "moment";
import PopupState, { bindMenu, bindTrigger } from "material-ui-popup-state";
import { IconButton } from "@mui/material";
import { OptionsIcon } from "../../assets";
import Menu from "@mui/material/Menu/Menu";
import MenuItem from "@mui/material/MenuItem";
import DeleteModal from "../DeleteModal";
// import { useGetAssetFormSearch } from "../../hooks/useGetAssetFormSearch"

const DraftForms = ({ parentRoute }: any) => {
  const dataGridStyles = useStyles();
  const [searchValue, setSearchValue] = useState("");
  const [tableRows, setTableRows] = useState<DraftFormsTableRow[]>([]);
  // const [, startTransition] = useTransition();
  const [currentOffset, setCurrentOffset] = useState(0);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const { setAssetValue } = useContext(NewOnsiteChecklistContext);
  const [selectedForm, setSelectedForm] = useState<any>(null);

  const navigate = useNavigate();

  const columns = [
    {
      field: "building_name",
      headerName: "Building Name",
      minWidth: 260,
      flex: 1,
    },
    {
      field: "updated_at",
      headerName: "Last Edited At",
      minWidth: 240,
      flex: 1,
    },
    { field: "type", headerName: "Form type", minWidth: 240, flex: 1 },
    {
      field: "action",
      headerName: "",
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params: any) => {
        const onEditHandler = () => {
          setAssetValue(params.row.asset);
          navigate(
            `/${parentRoute}/${
              params.row.type === "ASSUMPTIONS"
                ? "new-onsite-checklist"
                : "consultant-form"
            }`,
            {
              state: {
                initialStep:
                  params.row.last_step === null ? 2 : params.row.last_step,
                savedValues: params.row.data,
                savedAsset: params.row.asset,
                isDrafted: params.row.is_draft,
                draftId: params.row.id,
                fromDraft: true,
              },
            }
          );
        };
        const onDeleteHandler = () => {
          setSelectedForm(params.row.id);
          setIsDeleteModalOpen(true);
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

  const { dataAssetsDraftForms, isDataAssetsDraftFormsLoading } =
    useGetAssetsDraftForms({
      limit: TABLE_LIMIT,
      offset: currentOffset,
      isDraft: true,
      type:
        parentRoute === "account-admin"
          ? undefined
          : parentRoute === "account-consultant"
          ? "ONSITE_CHECKLIST"
          : "ASSUMPTIONS",
    });

  useEffect(() => {
    if (dataAssetsDraftForms) {
      const tableData: any = [];
      dataAssetsDraftForms.results.forEach((data: any) => {
        tableData.push({
          name: "",
          lastEditedAt: "",
          id: data.id,
          building: data.building_name,
          asset: data.asset_id,
          building_name: data.building_name,
          created_at: data.created_at,
          data: data.data,
          is_draft: data.is_draft,
          last_step: data.last_step,
          type: data.type,
          updated_at: moment(data.updated_at).format("MMM D, YYYY HH:mm"),
        });
      });
      setTableRows(tableData);
    }
  }, [dataAssetsDraftForms]);

  // const {
  //   assetFormData,
  //   // assetFormLoading,
  //   assetFormSuccess,
  //   assetFormRefetch
  // } = useGetAssetFormSearch({search_value: searchValue});

  // useEffect(() => {
  //   if(searchValue === ""){
  //     if (dataAssetsDraftForms) {
  //       const tableData: any = [];
  //       dataAssetsDraftForms.results.forEach((data: any) => {
  //         tableData.push({
  //           name: "",
  //           lastEditedAt: "",
  //           id: data.id,
  //           building: data.building_name,
  //           asset: data.asset,
  //           building_name: data.building_name,
  //           created_at: data.created_at,
  //           data: data.data,
  //           is_draft: data.is_draft,
  //           last_step: data.last_step,
  //           type: data.type,
  //           updated_at: moment(data.updated_at).format("MMM D, YYYY HH:mm"),
  //         });
  //       });
  //       setTableRows(tableData);
  //     }
  //   }
  //   if(assetFormSuccess === true && assetFormData !== undefined){
  //     if (assetFormData?.data.results) {
  //       const tableData: any = [];
  //       assetFormData?.data.results.forEach((data: any) => {
  //         tableData.push({
  //           name: "",
  //           lastEditedAt: "",
  //           id: data.id,
  //           building: data.building_name,
  //           asset: data.asset,
  //           building_name: data.building_name,
  //           created_at: data.created_at,
  //           data: data.data,
  //           is_draft: data.is_draft,
  //           last_step: data.last_step,
  //           type: data.type,
  //           updated_at: moment(data.updated_at).format("MMM D, YYYY HH:mm"),
  //         });
  //       });
  //       setTableRows(tableData);
  //     }
  //   }
  // }, [assetFormSuccess, assetFormData, dataAssetsDraftForms, searchValue]);

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
        const tableData: any = [];
        users?.results.forEach((data: any) => {
          tableData.push({
            name: "",
            lastEditedAt: "",
            id: data.id,
            building: data.building_name,
            asset: data.asset_id,
            building_name: data.building_name,
            data: data.data,
            is_draft: data.is_draft,
            last_step: data.last_step,
            type: data.type,
            updated_at: moment(data.updated_at).format("MMM D, YYYY HH:mm"),
            created_at: moment(data.created_at).format("MMM D, YYYY HH:mm"),
          });
        });
        setTableRows(tableData);
      })
      .catch((error) => {
        // console.log(error);
      });
  };

  // const onSearchHandler = (searchValue: string) => {
  //   console.log(searchValue, "searchValue searchValue")
  //   setSearchValue(searchValue);
  //   assetFormRefetch();
  //   // startTransition(() => {
  //   //   setTableRows(
  //   //     tableRows.filter(
  //   //       (item: DraftFormsTableRow) =>
  //   //         item.building.includes(e.target.value) ||
  //   //         item.lastEditedAt.includes(e.target.value)
  //   //     )
  //   //   );
  //   // });
  // };

  const { windowSize } = useContext(NewOnsiteChecklistContext);
  const [rowHeight, setRowHeight] = useState(60);

  useEffect(() => {
    if (windowSize.innerHeight <= 660 || windowSize.innerWidth <= 1200) {
      setRowHeight(40);
    } else {
      setRowHeight(60);
    }
  }, [windowSize]);

  const onNextHandler = () => {
    setCurrentOffset((prevState) => prevState + TABLE_LIMIT);
  };

  const onPreviousHandler = () => {
    setCurrentOffset((prevState) => prevState - TABLE_LIMIT);
  };

  return (
    <>
      <DeleteModal
        isModalOpen={isDeleteModalOpen}
        setIsModalOpen={setIsDeleteModalOpen}
        type={"asset-form"}
        formId={selectedForm}
        formType={"draft"}
      />
      <SearchBar
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        handleOnSearchFieldChange={handleOnSearchFieldChange}
        disabled={isDataAssetsDraftFormsLoading}
      />
      <div className={dataGridStyles.tableContainer}>
        <DataGrid
          rows={tableRows}
          columns={columns}
          rowHeight={rowHeight}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
          hideFooter
          loading={isDataAssetsDraftFormsLoading}
        />
        <TablePagination
          nextDisabled={
            dataAssetsDraftForms?.next === null || isDataAssetsDraftFormsLoading
          }
          previousDisabled={
            dataAssetsDraftForms?.previous === null ||
            isDataAssetsDraftFormsLoading
          }
          onPreviousHandler={onPreviousHandler}
          onNextHandler={onNextHandler}
          currentPage={currentOffset / TABLE_LIMIT + 1}
          setCurrentOffset={setCurrentOffset}
          total={dataAssetsDraftForms?.count}
        />
      </div>
    </>
  );
};

export default DraftForms;
