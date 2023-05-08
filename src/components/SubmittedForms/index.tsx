import { DataGrid, GridSelectionModel } from "@mui/x-data-grid";
import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TABLE_LIMIT } from "../../constants";
import { NewOnsiteChecklistContext } from "../../contexts/NewOnsiteChecklistContext";
import { useGetAssetsSubmittedForms } from "../../hooks/useGetAssetsSubmittedForms";
import { useStyles } from "../../styles/DataGrid.style";
import { SubmittedFormsTableRow } from "../../types";
import TablePagination from "../Pagination";
import SearchBar from "../SearchBar";
import moment from "moment";
import PopupState, { bindMenu, bindTrigger } from "material-ui-popup-state";
import { IconButton } from "@mui/material";
import { OptionsIcon } from "../../assets";
import Menu from "@mui/material/Menu/Menu";
import MenuItem from "@mui/material/MenuItem";
import DeleteModal from "../DeleteModal";
import { DownloadIcon } from "../../assets";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SubmittedForms = ({ parentRoute }: any) => {
  const dataGridStyles = useStyles();
  const [searchValue, setSearchValue] = useState("");
  const [tableRows, setTableRows] = useState<SubmittedFormsTableRow[]>([]);
  const [currentOffset, setCurrentOffset] = useState(0);
  const navigate = useNavigate();
  const { setAssetValue } = useContext(NewOnsiteChecklistContext);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedForm, setSelectedForm] = useState();

  const [selectedAssets] = useState<GridSelectionModel>();

  const { dataAssetsSubmittedForms, isDataAssetsSubmittedFormsLoading } =
    useGetAssetsSubmittedForms({
      limit: TABLE_LIMIT,
      offset: currentOffset,
      isDraft: false,
      type:
        parentRoute === "account-admin"
          ? undefined
          : parentRoute === "account-consultant"
          ? "ONSITE_CHECKLIST"
          : "ASSUMPTIONS",
    });

  useEffect(() => {
    if (dataAssetsSubmittedForms) {
      const tableData: any[] = [];

      dataAssetsSubmittedForms.results.forEach((data: any) => {
        tableData.push({
          id: data.id,
          asset: data.asset_id,
          updated_at: moment(data.updated_at).format("MMM D, YYYY HH:mm"),
          data: data.data,
          building_name: data.building_name,
          is_draft: data.is_draft,
          last_step: data.last_step,
          type: data.type,
          created_at: moment(data.created_at).format("MMM D, YYYY HH:mm"),
        });
      });
      setTableRows(tableData);
    }
  }, [dataAssetsSubmittedForms, selectedAssets]);

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

  const { windowSize } = useContext(NewOnsiteChecklistContext);
  const [rowHeight, setRowHeight] = useState(60);

  const [, setImageDownloadLoading] = useState(false);

  const notify = (txt: string) => {
    toast(txt);
  };

  const handleFormDataDownload = async (formId: any, buildingName: string) => {
    notify("Form Data Downloading");

    fetch(``, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => {
        if (response.status === 500 || response.status === 400) {
          throw new Error(`${response.status}`);
        }
        return response.blob();
      })
      .then((blob: any) => {
        setImageDownloadLoading(false);
        const downloadLink = document.createElement("a");
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.download = `${buildingName}.csv`;
        document.body.appendChild(downloadLink);
        downloadLink.click();
      })
      .catch((error) => {
        if (error === "Error: 500") {
          notify(`Failed to Download Form Data ${buildingName}`);
        } else {
          notify(`Failed to Download Form Data ${buildingName}`);
        }
      });
  };

  const handleAssetImageDownload = async (
    assetId: any,
    buildingName: string
  ) => {
    setImageDownloadLoading(true);
    notify("Asset Image Downloading");
    fetch(``, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => {
        if (response.status === 500) {
          throw new Error(`${response.status}`);
        }
        return response.blob();
      })
      .then((blob: any) => {
        setImageDownloadLoading(false);
        const downloadLink = document.createElement("a");
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.download = `${buildingName}.zip`;
        document.body.appendChild(downloadLink);
        downloadLink.click();
      })
      .catch((error) => {
        if (error === "Error: 500") {
          notify(`Failed to Download Asset Image ${buildingName}`);
        } else {
          notify(`Failed to Download Asset Image ${buildingName}`);
        }
      });
  };

  const columns = [
    {
      field: "building_name",
      headerName: "Building Name",
      minWidth: 270,
      flex: 1,
    },
    {
      field: "created_at",
      headerName: "Submitted At",
      minWidth: 240,
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
                fromSubmitted: true,
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
                  {params.row.type === "ONSITE_CHECKLIST" && (
                    <MenuItem
                      onClick={() => {
                        handleAssetImageDownload(
                          params.row.asset,
                          params.row.building_name
                        );
                        popupState.close();
                      }}
                      // disabled={true}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <div>
                          <DownloadIcon />
                        </div>
                        <div style={{ padding: 5 }} />
                        <div>Images</div>
                      </div>
                    </MenuItem>
                  )}
                  <MenuItem
                    onClick={() => {
                      handleFormDataDownload(
                        params.row.id,
                        params.row.building_name
                      );
                      popupState.close();
                    }}
                    // disabled={true}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <div>
                        <DownloadIcon />
                      </div>
                      <div style={{ padding: 5 }} />
                      <div>Data</div>
                    </div>
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
        formType={"submitted"}
      />
      <SearchBar
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        handleOnSearchFieldChange={handleOnSearchFieldChange}
        disabled={isDataAssetsSubmittedFormsLoading}
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
          loading={isDataAssetsSubmittedFormsLoading}
        />
        <TablePagination
          nextDisabled={
            dataAssetsSubmittedForms?.next === null ||
            isDataAssetsSubmittedFormsLoading
          }
          previousDisabled={
            dataAssetsSubmittedForms?.previous === null ||
            isDataAssetsSubmittedFormsLoading
          }
          onPreviousHandler={onPreviousHandler}
          onNextHandler={onNextHandler}
          currentPage={currentOffset / TABLE_LIMIT + 1}
          setCurrentOffset={setCurrentOffset}
          total={dataAssetsSubmittedForms?.count}
        />
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={1500}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default SubmittedForms;
