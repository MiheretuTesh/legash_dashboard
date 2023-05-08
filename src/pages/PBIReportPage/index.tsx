import React, { useRef, useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import FormButton from "../../components/FormButton";
import { useStyles } from "./index.style";
import $ from "jquery";
import { useDownloadPdf } from "../../hooks/useDownloadPdf";
import { NewOnsiteChecklistContext } from "../../contexts/NewOnsiteChecklistContext";
import LoadingSpinner from "../../components/LoadingSpinner";
// import { saveAs } from 'file-saver';

const PBIReportPage = () => {
  const { reportId } = useParams();
  const [pdfLoading, setPdfLoading] = useState(false);
  const styles = useStyles();
  const reportRef = useRef<HTMLInputElement>(null);
  const { reportPageTitle } = useContext(NewOnsiteChecklistContext);

  const { pdfData, refetch, fetchStatus } = useDownloadPdf({
    report_name: reportPageTitle,
  });

  const powerbi = window["powerbi"];

  useEffect(() => {
    $(function () {
      var reportContainer = $("#report-container").get(0);

      // Initialize iframe for embedding report
      // powerbi.bootstrap(reportContainer, { type: "report" });

      var models = window["powerbi-client"].models;
      console.log(models.TokenType.Embed, "models models models");
      var reportLoadConfig = {
        type: "report",
        tokenType: models.TokenType.Embed,
        accessToken: null,
        embedUrl: null,

        // Enable this setting to remove gray shoulders from embedded report
        // settings: {
        //     background: models.BackgroundType.Transparent
        // }
      };

      console.log(reportId, "reportId reportId reportId reportId");

      $.ajax({
        type: "GET",
        url: "" + reportId,
        dataType: "json",
        success: function (data) {
          let embedData = JSON.parse(data);
          reportLoadConfig.accessToken = embedData.accessToken;
          // You can embed different reports as per your need
          reportLoadConfig.embedUrl = embedData.reportConfig[0].embedUrl;

          // Use the token expiry to regenerate Embed token for seamless end user experience
          // Refer https://aka.ms/RefreshEmbedToken
          //   let tokenExpiry = embedData.tokenExpiry;

          // Embed Power BI report when Access token and Embed URL are available
          var report = powerbi.embed(reportContainer, reportLoadConfig);

          // Triggers when a report schema is successfully loaded
          report.on("loaded", function () {
            report
              .updateSettings({
                panes: {
                  filters: {
                    visible: false,
                  },
                  pageNavigation: {
                    visible: false,
                  },
                },
              })
              .catch(function (err: any) {
                console.log(err);
              });
          });

          // Triggers when a report is successfully embedded in UI
          report.on("rendered", function () {});

          // Clear any other error handler event
          report.off("error");

          // Below patch of code is for handling errors that occur during embedding
          report.on("error", function (event: any) {
            var errorMsg = event.detail;
            // Use errorMsg variable to log error in any destination of choice
            console.error(errorMsg);
            return;
          });
        },
        error: function (err) {
          // Show error container
          var errorContainer = $(".error-container");
          $(".embed-container").hide();
          errorContainer.show();

          // Format error message
          var errMessageHtml =
            "<strong> Error Details: </strong> <br/>" +
            $.parseJSON(err.responseText)["errorMsg"];
          errMessageHtml = errMessageHtml.split("\n").join("<br/>");

          // Show error message on UI
          errorContainer.html(errMessageHtml);
        },
      });
    });
  }, [reportId, powerbi]);

  const onFullScreenHandler = () => {
    var element = $("#report-container")[0];
    var report = powerbi.get(element);
    report.fullscreen();
  };
  const onDownloadPdfHandler = async () => {
    refetch();
    setPdfLoading(true);
  };

  useEffect(() => {
    if (pdfData?.data.url && pdfLoading === true) {
      fetch(pdfData?.data.url).then((response) => {
        response.blob().then((blob) => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          let alink = document.createElement("a");
          alink.href = fileURL;
          alink.download = `${reportPageTitle}.pdf`;
          alink.click();
        });
      });
    }
  }, [pdfData, pdfLoading, reportPageTitle]);

  return (
    <div className={styles.contentContainer}>
      <div className={styles.sectionContainer}>
        <>
          <section
            ref={reportRef}
            id="report-container"
            className={styles.reportContainer}
            //   className="embed-container col-lg-offset-4 col-lg-7 col-md-offset-5 col-md-7 col-sm-offset-5 col-sm-7 mt-5"
          />
        </>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className={styles.buttonContainer}>
          <FormButton
            buttonType="button"
            buttonVariant="contained"
            onButtonClick={onFullScreenHandler}
            customStyle={styles.fullScreenBtn}
          >
            Full Screen
          </FormButton>
        </div>
        <div style={{ width: "50px" }} />
        <div className={styles.buttonContainer}>
          <FormButton
            buttonType="button"
            buttonVariant="contained"
            onButtonClick={onDownloadPdfHandler}
            customStyle={styles.fullScreenBtn}
            disabled={fetchStatus === "fetching"}
          >
            {fetchStatus === "fetching" ? (
              <LoadingSpinner customStyle={styles.backBtn} type="button" />
            ) : (
              <div>Download PDF</div>
            )}
          </FormButton>
        </div>
      </div>
    </div>
  );
};

export default PBIReportPage;
