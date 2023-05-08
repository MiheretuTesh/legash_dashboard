import React from "react";
import {useStyles} from "./index.style";

interface HelpPageProps {
  userType: string;
}

const HelpPage = ({ userType }: HelpPageProps) => {
  const styles = useStyles();

  return (
      <div className={styles.helpPage}>
        <div className={styles.pageContainer}>
          <h1 className={styles.pageHeader}>Hello & Welcome to Ambio.</h1>
          <p className={styles.pageSubheader}>
            Ambio is PATRIZIA’s new end-to-end smart buildings platform.
            To know more about us, please visit the homepage at &nbsp;
            <a href="https://www.ambio.co/" target="_blank" rel="noreferrer">
              Smart Buildings | Ambio
            </a>
          </p>
          <br/>
          <p className={styles.pageSubheader}>
            Register/login via our homepage with SSO available for all PATRIZIA employees.
          </p>
          <br/>
          <p className={styles.pageSubheader}>
            Click on dashboards on the left tab to view your assets analysed
            by Ambio and their respective reports.
          </p>
          <br/>
          <p className={styles.pageSubheader}>
            View the report by clicking on ‘full screen’ at the bottom of
            the page for better view.
          </p>
          <br/>
          <p className={styles.pageSubheader}>
            For unique and bespoke recommendations for your asset, we ask for key
            information related to your asset in the ‘assumptions’ form.
            Kindly fill this into the best of your knowledge for maximum impact.
          </p>
          <br/>
          <p className={styles.pageSubheader}>
            Our engineers go on-site and fill in the ‘on-site checklist’ in
            the forms section to scan existing infrastructure and technology provision.
          </p>
          <br/>
          <p className={styles.pageSubheader}>
            To download the implementation table from the dashboard:
          </p>

          <div className={styles.subPageContent}>
            <br/>
            <p className={styles.pageSubheader}>
              1. Navigate to the Implementations page
            </p>

            <br/>
            <p className={styles.pageSubheader}>
              2. Click on the three dots icon above the Implementation table as shown below
            </p>

            <br/>
            <img
                // className={styles.pictureContainer}
                src={require("../../assets/images/help-img-1.png")}
                alt="img-1"
                width={400}
            />

            <br/>
            <p className={styles.pageSubheader}>
              3. Then click on Export data
            </p>

            <br/>
            <img
                // className={styles.pictureContainer}
                src={require("../../assets/images/help-img-2.png")}
                alt="img-1"
                width={300}
            />

            <br/>
            <p className={styles.pageSubheader}>
              4. The data will be downloaded in an Excel file
            </p>
          </div>
        </div>

      </div>
  );
};

export default HelpPage;
