import React from "react";

export default function Pagination({ gotoNextPage, gotoPrevPage }) {
  return (
    <div>
      {gotoPrevPage && (
        <button className="pagination-button previous" onClick={gotoPrevPage}>
          <span> Previous</span>
        </button>
      )}
      {gotoNextPage && (
        <button className="pagination-button next" onClick={gotoNextPage}>
          <span>Next </span>
        </button>
      )}
    </div>
  );
}
