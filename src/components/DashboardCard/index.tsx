import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { NewOnsiteChecklistContext } from "../../contexts/NewOnsiteChecklistContext";
import FormButton from "../FormButton";
import { useStyles } from "./index.style";
import moment from "moment";

interface DashboardCardProps {
  name: string;
  numberOfUsers: number;
  reportId: number;
  location: string;
  lastEdited: string;
  lastEditedBy: string;
  status: string;
}

const DashboardCard = ({
  name,
  numberOfUsers,
  reportId,
  location,
  lastEdited,
  lastEditedBy,
  status
}: DashboardCardProps) => {
  const styles = useStyles();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { setReportPageTitle } = useContext(NewOnsiteChecklistContext);
  const statusValue = status.split("_");

  const onViewClickHandler = () => {
    setReportPageTitle(name);
    navigate(`/${pathname.split("/")[1]}/report/${reportId}`);
  };

  const dateFormatter = (date: string) => {
    const inputDate = new Date(lastEdited);
    const inputDay = inputDate.getDate();
    const inputMonth = inputDate.getMonth() + 1;
    const inputYear = inputDate.getFullYear();
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear();

    if (inputMonth === currentMonth && inputYear === currentYear) {
      if (inputDay === currentDay) {
        return "Today";
      } else if (currentDay - inputDay === 1) {
        return "Yesterday";
      }
    }
    return moment(date).format("MMM D, YYYY HH:mm")
  };

  dateFormatter(lastEdited);

  const capitalizeFirstLetter = (status: string) => {
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  return (
    <div className={styles.cardContainer}>
      <div className={styles.headerContainer}>
        <div>
          <h1 className={styles.headerText}>{name}</h1>
          <p className={styles.subText}>
            <strong>Location: </strong>
            {location}
          </p>
          <p className={styles.subText}>
            <strong>Status: </strong>
            {
              (reportId !==null
                &&
                (status==="NOT_STARTED" || status ==="COMPLETED"))
                ?
                "Live"
                :
                  capitalizeFirstLetter(statusValue.join(" ").toLowerCase())
            }
          </p>
        </div>
        <div>
          <p className={styles.subText}>
            <strong>Number of users:</strong> {numberOfUsers}
          </p>
          <p className={styles.subText}>
            <strong>Last edited at:</strong> {dateFormatter(lastEdited)}
          </p>
          <p className={styles.subText}>
            <strong>Last edited by:</strong>{" "}
            {lastEditedBy === null ? "N/A" : lastEditedBy}
          </p>
        </div>
      </div>
      <FormButton
        buttonType="button"
        buttonVariant="contained"
        onButtonClick={onViewClickHandler}
        disabled={reportId === null}
        customStyle={styles.viewBtn}
      >
        View
      </FormButton>
    </div>
  );
};

export default DashboardCard;
