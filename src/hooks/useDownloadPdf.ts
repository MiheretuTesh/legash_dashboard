import { useQuery } from "@tanstack/react-query";
import {DownloadPdf} from "../api/DownloadPdfService"

export const useDownloadPdf = ({
  report_name,
  }: {
  report_name: string,
}) => {
  // @ts-ignore
  const {data: pdfData, isLoading, refetch, isSuccess, fetchStatus} =
      useQuery(['download_pdf'], ()=> DownloadPdf(report_name),{refetchOnWindowFocus:false,enabled:false});

  return {pdfData, isLoading, refetch, isSuccess, fetchStatus};
};