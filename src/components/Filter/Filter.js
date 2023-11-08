import React from "react";
import Status from "./category/Status";

const Filter = ({
  pageNumber,
  updatePageNumber,
  updateStatus
}) => {
  let clear = () => {
    updateStatus("");
    updatePageNumber(1);
    window.location.reload();
  };
  return (
    <div className="col-12 mb-5">
      <div className="d-flex justify-content-center">
        <Status
          updatePageNumber={updatePageNumber}
          updateStatus={updateStatus}
        />
        <span
          style={{ cursor: "pointer", marginLeft:"2em" }}
          onClick={clear}
          className="text-primary text-decoration-underline text-center ml-2">
          Clear Filters
        </span>
      </div>
    </div>
  );
};

export default Filter;
