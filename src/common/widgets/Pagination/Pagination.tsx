import React from "react";
import "./Pagination.css";
import { Dispatch, SetStateAction } from "react";

interface PaginationProps {
  currentPage?: number;
  totalItems?: number;
  limit?: number;
  setCurrentPage?: Dispatch<SetStateAction<number>>;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage = 0,
  totalItems = 0,
  limit = 0,
  setCurrentPage,
}) => {
  const numberOfPages = Math.ceil(totalItems / limit);
  const pages = [...Array(numberOfPages).keys()].map((page) => page + 1);

  const handleItemsPerPage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedPage = parseInt(e.target.value);
    if (setCurrentPage) {
      setCurrentPage(selectedPage);
    }
  };

  const handlePrevPage = () => {
    if (setCurrentPage && currentPage && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (setCurrentPage && currentPage && currentPage < numberOfPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="pagination">
      <button onClick={handlePrevPage}>Prev</button>
      {pages.map((page) => (
        <button
          className={currentPage === page ? "selected" : undefined}
          onClick={() => setCurrentPage && setCurrentPage(page)}
          key={page}
        >
          {page}
        </button>
      ))}
      <button onClick={handleNextPage}>Next</button>
      <select value={currentPage} onChange={handleItemsPerPage}>
        {pages.map((page) => (
          <option key={page} value={page}>
            {page}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Pagination;
