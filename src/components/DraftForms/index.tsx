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
import { useGetCampaigns } from "../../hooks/useGetCampaigns";
import { useEditCampaignStatus } from "../../hooks/useEditCampaignStatus";

const DraftForms = ({ parentRoute }: any) => {
  const dataGridStyles = useStyles();
  const [searchValue, setSearchValue] = useState("");
  const [tableRows, setTableRows] = useState<DraftFormsTableRow[]>([]);
  const [currentOffset, setCurrentOffset] = useState(0);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [campaignId, setCampaignId] = useState("");

  const [selectedForm, setSelectedForm] = useState<any>(null);
  const { dataCampaigns, isLoadingCampaigns } = useGetCampaigns({});

  const {
    mutate: campaignStatusMutate,
    isLoading: campaignStatusUpdateLoading,
    isSuccess: campaignStatusUpdateSuccess,
  } = useEditCampaignStatus({});

  const navigate = useNavigate();

  const columns = [
    {
      field: "campaign_name",
      headerName: "Campaign Name",
      minWidth: 260,
      flex: 1,
    },
    {
      field: "updated_at",
      headerName: "Last Edited At",
      minWidth: 240,
      flex: 1,
    },
    { field: "created_at", headerName: "Created Date", minWidth: 240, flex: 1 },
    {
      field: "action",
      headerName: "",
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params: any) => {
        const onEditHandler = () => {
          setCampaignId(params.row.id);
          campaignStatusMutate({ status: "Active", id: params.row.id });
        };
        const onDeleteHandler = () => {};

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
                    Approve
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      popupState.close();
                      onDeleteHandler();
                    }}
                  >
                    Terminate
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
        if (data.status !== "Active") {
          tableData.push({
            campaign_name: data.campaignDescription,
            created_at: data.createdAt,
            updated_at: moment(data.updatedAt).format("MMM D, YYYY HH:mm"),
            id: data._id,
          });
        }
      });

      setTableRows(tableData);
    }
  }, [dataCampaigns, campaignStatusUpdateSuccess]);

  const handleOnSearchFieldChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    setSearchValue(value);
    // Perform the necessary search logic here
  };

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
        disabled={isLoadingCampaigns}
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
      </div>
    </>
  );
};

export default DraftForms;
