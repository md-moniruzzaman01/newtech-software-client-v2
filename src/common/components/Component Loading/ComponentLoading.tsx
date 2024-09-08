import React from "react";

interface ComponentLoadingProps {
  width?: string;
  height?: string;
  className?: string;
}

const ComponentLoading: React.FC<ComponentLoadingProps> = ({
  width = "50",
  height = "50",
  className = " h-full",
}) => {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        width={width}
        height={height}
      >
        <radialGradient
          id="a11"
          cx=".66"
          fx=".66"
          cy=".3125"
          fy=".3125"
          gradientTransform="scale(1.5)"
        >
          <stop offset="0" stopColor="#2D98FF"></stop>
          <stop offset=".3" stopColor="#2D98FF" stopOpacity=".9"></stop>
          <stop offset=".6" stopColor="#2D98FF" stopOpacity=".6"></stop>
          <stop offset=".8" stopColor="#2D98FF" stopOpacity=".3"></stop>
          <stop offset="1" stopColor="#2D98FF" stopOpacity="0"></stop>
        </radialGradient>
        <circle
          transform-origin="center"
          fill="none"
          stroke="url(#a11)"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray="200 1000"
          strokeDashoffset="0"
          cx="100"
          cy="100"
          r="70"
        >
          <animateTransform
            type="rotate"
            attributeName="transform"
            calcMode="spline"
            dur="0.7"
            values="360;0"
            keyTimes="0;1"
            keySplines="0 0 1 1"
            repeatCount="indefinite"
          ></animateTransform>
        </circle>
        <circle
          transform-origin="center"
          fill="none"
          opacity=".2"
          stroke="#2D98FF"
          strokeWidth="10"
          strokeLinecap="round"
          cx="100"
          cy="100"
          r="70"
        ></circle>
      </svg>
    </div>
  );
};

export default ComponentLoading;
