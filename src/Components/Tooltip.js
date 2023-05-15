import { useState } from "react";

export default function Index(props) {
  const [tooltipStatus, setTooltipStatus] = useState(0);

  return (
    <div>
      <div className="flex-col md:flex-row flex items-center md:justify-center">
        {/*Code Block for white tooltip starts*/}
        <div
          className="relative mt-20 md:mt-0"
          onMouseEnter={() => setTooltipStatus(1)}
          onMouseLeave={() => setTooltipStatus(0)}
        >
          <div className="mr-2 cursor-pointer">
            <svg
              aria-haspopup="true"
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-info-circle"
              width={25}
              height={25}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#A0AEC0"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <circle cx={12} cy={12} r={9} />
              <line x1={12} y1={8} x2="12.01" y2={8} />
              <polyline points="11 12 12 12 12 16 13 16" />
            </svg>
          </div>
          {tooltipStatus === 1 && (
            <div
              role="tooltip"
              className="z-20 -mt-[30px] absolute w-[373px] transition duration-700 ease-in-out left-0 ml-8 shadow-lg bg-white p-4 rounded"
            >
              {props.information}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
