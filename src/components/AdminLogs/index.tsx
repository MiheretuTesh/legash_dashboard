import React, { useEffect, useState } from "react";

import { useStyles } from "./index.style";

import { useAdminLogs } from "../../hooks/useAdminLogs";

import LoadingSpinner from "../../components/LoadingSpinner";

import moment from "moment-timezone";

const AdminLogsPage = () => {
  const styles = useStyles();

  const [logs, setLogs] = useState<any>();

  const { isLoading, data } = useAdminLogs();

  useEffect(() => {
    setLogs(data);
    moment.locale(navigator.language);
  }, [data]);

  const getUserTimezone = () => {
    const offset = new Date().getTimezoneOffset();
    return moment.tz.guess(true) || moment.tz.names()[offset];
  };

  const getFormattedDateTime = (dateTime: any) => {
    return moment.tz(dateTime, getUserTimezone()).format("LT");
  };

  const getFormattedDate = (dateTime: any) => {
    return moment.tz(dateTime, getUserTimezone()).format("ll");
  };

  return (
      <div className={styles.container}>
        {isLoading ? (
            <div className={styles.loaderStyle}>
              <LoadingSpinner />
            </div>
        ) : (
            logs &&
            logs.data.results.map((log: any) => {
              return (
                  <div className={styles.logHolder} key={log.id}>
              <span className={styles.formattedDate}>
                {getFormattedDate(log.event_at)}
              </span>
                    <br />
                    <span className={styles.formattedDateTime}>
                {getFormattedDateTime(log.event_at)}
              </span>
                    <br />
                    <span className={styles.logMsg}>
                      {log.event_by_email} {log.event_type.split(".")[1]} the
                      &nbsp;
                      {log.source_name}
                      &nbsp;
                      {log.source_hint === "ASSUMPTIONS" ? "Assumptions" : "Onsite checklist"}
                      &nbsp;
                      {log.source_model.toLowerCase()}
              </span>
                  </div>
              );
            })
        )}
      </div>
  );
};

export default AdminLogsPage;
