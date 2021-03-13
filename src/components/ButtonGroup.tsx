import { ReactElement } from "react";

const ButtonGroup = ({ showTable, handleShowTable }): ReactElement => {
  const showTableBkgrd = showTable ? "bg-white" : "bg-gray-100";
  const showCardBkgrd = showTable ? "bg-gray-100" : "bg-white";

  return (
    <div className="flex justify-end pt-6 pr-6">
      <span className="relative z-0 inline-flex shadow-sm rounded-md">
        <button
          onClick={!showTable ? handleShowTable : undefined}
          type="button"
          className={`${showTableBkgrd} relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500`}
        >
          <svg
            className="-ml-1 mr-2 h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
          </svg>
          Table
        </button>
        <button
          onClick={showTable ? handleShowTable : undefined}
          type="button"
          className={`${showCardBkgrd} -ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500`}
        >
          <svg
            className="-ml-1 mr-2 h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
          </svg>
          Card
        </button>
      </span>
    </div>
  );
};

export default ButtonGroup;
