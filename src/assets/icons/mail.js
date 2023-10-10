import * as React from "react";

const MailComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="tabler-icon tabler-icon-mail"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);
export default MailComponent;
