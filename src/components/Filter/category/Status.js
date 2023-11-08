import React, {Fragment} from "react";
import FilterButton from "../FilterButton";

const Status = ({ updateStatus, updatePageNumber }) => {
  let status = ["Alive", "Dead"];
  return (
    <Fragment>   
      <div className="d-flex gap-3">
        {status.map((item, index) => (
          <FilterButton
            key={index}
            index={index}
            name="status"
            task={updateStatus}
            updatePageNumber={updatePageNumber}
            input={item}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default Status;
