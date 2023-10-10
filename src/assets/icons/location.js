import * as React from "react";
const LocationComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="tabler-icon tabler-icon-map-search"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="m11 18-2-1-6 3V7l6-3 6 3 6-3v7.5M9 4v13M15 7v5M15 18a3 3 0 1 0 6 0 3 3 0 1 0-6 0M20.2 20.2 22 22" />
  </svg>
);
export default LocationComponent;
