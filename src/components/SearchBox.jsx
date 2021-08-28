import React from "react";
import "./SearchBox.css";

function SearchBox({ handleQueryUpdate }) {
  return (
    <div className="container">
      <div className="row height d-flex justify-content-center align-items-center">
        <div className="col-md-6">
          <div className="form">
            {" "}
            <i className="fa fa-search"></i>{" "}
            <input
              type="text"
              className="form-control form-input"
              placeholder="Search..."
              onChange={(e) => {
                handleQueryUpdate(e.target.value);
              }}
            />{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBox;
