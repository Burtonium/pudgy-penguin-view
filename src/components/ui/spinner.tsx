import React, { DetailedHTMLProps, HTMLAttributes } from "react";

type SpinnerProps = DetailedHTMLProps<
  HTMLAttributes<SVGSVGElement>,
  SVGSVGElement
>;

const Spinner = (props: SpinnerProps) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
    style={{ background: "none" }}
  >
    <circle
      cx="50"
      cy="50"
      stroke="currentColor"
      fill="none"
      strokeWidth="10"
      r="35"
      strokeDasharray="164.93361431346415 56.97787143782138"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        repeatCount="indefinite"
        dur="1s"
        values="0 50 50;360 50 50"
        keyTimes="0;1"
      ></animateTransform>
    </circle>
  </svg>
);

export default Spinner;
