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
import { useEditCampaignStatus } from "../../hooks/useEditCampaignStatus";
import { useGetCampaigns } from "../../hooks/useGetCampaigns";

const TerminatedCampaigns = ({ parentRoute }: any) => {
  const dataGridStyles = useStyles();
  const [searchValue, setSearchValue] = useState("");
  const [tableRows, setTableRows] = useState<SubmittedFormsTableRow[]>([]);
  const [currentOffset, setCurrentOffset] = useState(0);
  const navigate = useNavigate();
  const { setAssetValue } = useContext(NewOnsiteChecklistContext);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [selectedAssets] = useState<GridSelectionModel>();

  const [campaignId, setCampaignId] = useState("");

  const [selectedForm, setSelectedForm] = useState<any>(null);
  const { dataCampaigns, isLoadingCampaigns } = useGetCampaigns({});

  const {
    mutate: campaignStatusMutate,
    isLoading: campaignStatusUpdateLoading,
    isSuccess: campaignStatusUpdateSuccess,
  } = useEditCampaignStatus({});

  useEffect(() => {
    dataCampaigns();
  }, [campaignStatusUpdateSuccess]);

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

  const columns = [
    {
      field: "campaign_name",
      headerName: "Campaign Name",
      minWidth: 270,
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      minWidth: 100,
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
    {
      field: "action",
      headerName: "",
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params: any) => {
        const onCampaignActive = () => {
          campaignStatusMutate({ status: "Pending", id: params.row.id });
        };
        const onCampaignPending = () => {
          campaignStatusMutate({ status: "Active", id: params.row.id });
        };

        const onCampaignArchive = () => {
          campaignStatusMutate({ status: "Archived", id: params.row.id });
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
                      onCampaignPending();
                    }}
                  >
                    Active
                  </MenuItem>

                  <MenuItem
                    onClick={() => {
                      popupState.close();
                      onCampaignPending();
                    }}
                  >
                    Pending
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      popupState.close();
                      onCampaignArchive();
                    }}
                  >
                    Archive
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
    if (dataCampaigns) {
      const tableData: any[] = [];

      dataCampaigns?.data.forEach((data: any) => {
        if (data.status !== "Active" && data.status !== "Pending") {
          tableData.push({
            campaign_name: data.campaignDescription,
            created_at: data.createdAt,
            updated_at: moment(data.updatedAt).format("MMM D, YYYY HH:mm"),
            id: data._id,
            status: data.status,
          });
        }
      });

      setTableRows(tableData);
    }
  }, [dataCampaigns, campaignStatusUpdateSuccess, campaignStatusUpdateLoading]);

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
          loading={isLoadingCampaigns}
        />
        {/* <TablePagination
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
        /> */}
      </div>
    </>
  );
};

export default TerminatedCampaigns;
