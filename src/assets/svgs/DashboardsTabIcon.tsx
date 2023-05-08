import React from "react";

interface DashboardsTabIconProps {
  color: string;
}

const DashboardsTabIcon = ({ color }: DashboardsTabIconProps) => {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.00241 6.03979C3.38429 5.28281 7.10159 4.10141 7.10159 4.10141M1.00241 6.03979C3.05886 4.84377 6.21936 3.00565 6.48391 2.85179C6.49712 2.84411 6.50905 2.8392 6.52366 2.83471L12.5009 1M1.00241 6.03979C0.930314 6.08166 2.50221 6.8636 2.50221 6.8636M7.10159 4.10141L12.5009 1M7.10159 4.10141C7.10159 4.10141 10.697 9.29955 13.0008 12.6303M12.5009 1L13.0572 1.26964C13.0859 1.28352 13.1108 1.30403 13.1299 1.32947L18.8541 8.94701C18.9297 9.04763 18.8947 9.19225 18.7814 9.24714L18.4001 9.43196M13.0008 12.6303C15.1094 11.3813 18.4001 9.43196 18.4001 9.43196M13.0008 12.6303C12.9008 12.6895 11.601 11.8614 11.601 11.8614M18.4001 9.43196V16.1941C18.4001 16.2675 18.3599 16.335 18.2954 16.3699C17.6358 16.7272 14.0071 18.6928 11.601 19.9961M11.601 11.8614L2.50221 6.8636M11.601 11.8614V14.9563M11.601 19.9961C11.601 18.028 11.601 14.9563 11.601 14.9563M11.601 19.9961C11.6009 20.0931 8.60139 18.3347 8.60139 18.3347M2.50221 6.8636V14.8385C2.50221 14.9112 2.54168 14.9782 2.6053 15.0134L8.60139 18.3347M4.00201 10.8373V9.55252C4.00201 9.40611 4.15416 9.30932 4.28677 9.37138L5.45181 9.91655M4.00201 10.8373V12.3201C4.00201 12.392 4.04065 12.4584 4.1032 12.4939L5.45181 13.2603M4.00201 10.8373L6.90162 12.3395M6.90162 12.3395V13.7404C6.90162 13.8937 6.73614 13.99 6.60281 13.9143L5.45181 13.2603M6.90162 12.3395V10.7222C6.90162 10.6446 6.8567 10.574 6.78639 10.5411L5.45181 9.91655M5.45181 9.91655V13.2603M11.601 14.9563L8.89983 13.429C8.76651 13.3536 8.60139 13.4499 8.60139 13.6031V18.3347"
        stroke={color}
        strokeWidth="0.6"
      />
    </svg>
  );
};

export default DashboardsTabIcon;
