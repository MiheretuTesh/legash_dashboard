import React from "react";
import DashboardCard from "../../components/DashboardCard";
import { useGetHospitals } from "../../hooks/useGetHospitals";
import { useGetAssetCount } from "../../hooks/useGetAssetsCount";
import { useStyles } from "./index.style";
import LoadingSpinner from "../../components/LoadingSpinner";

const DashboardsPage = () => {
  const styles = useStyles();

  const { dataAssets: assetData } = useGetAssetCount({
    limit: 0,
    offset: 0,
  });

  // const { dataHospitals, isLoadingHospitals } = useGetHospitals({});

  let renderedAssets = [];
  // for (let index = 0; index < dataAssets?.results.length; index++) {
  //   const element = dataAssets?.results[index];
  //   // if (element.report_id === null) {
  //   renderedAssets.push(element);
  //   // } else {
  //   //   renderedAssets.unshift(element);
  //   // }
  // }

  return (
    <>
      {/* {isLoadingAssets ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <LoadingSpinner />
        </div>
      ) : (
        <div className={styles.container}>
          {renderedAssets.length > 0 ? (
            renderedAssets.map((building: any, index: number) => (
              <DashboardCard
                key={`${index}-${building}`}
                name={building.building}
                location={building.location}
                numberOfUsers={building.users.length}
                lastEdited={building.updated_at}
                lastEditedBy={
                  building.edited_by !== null
                    ? building.edited_by
                    : building.created_by
                }
                reportId={building.report_id}
                status={building.task_status}
              />
            ))
          ) : (
            <div className={styles.noContent}>No dashboards to show yet</div>
          )}
        </div>
      )} */}
    </>
  );
};

export default DashboardsPage;
