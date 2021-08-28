import React from "react";
import Search from "./SearchBox";
const Title = ({ handleQueryUpdate }) => {
  return (
    <div className="title">
      <h2>Company Finder</h2>
      <h6>search for the companies you want...</h6>
      <Search handleQueryUpdate={handleQueryUpdate} />
    </div>
  );
};

export default Title;
