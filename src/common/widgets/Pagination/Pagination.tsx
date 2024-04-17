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
  currentPage = 1,
  totalItems = 0,
  limit = 10,
  setCurrentPage,
}) => {
  const numberOfPages = Math.ceil(totalItems / limit);

  const handleItemsPerPage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedPage = parseInt(e.target.value);

    if (setCurrentPage && selectedPage <= numberOfPages && selectedPage >= 0) {
      setCurrentPage(selectedPage);
    } else {
      setCurrentPage(numberOfPages);
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
    <div className="flex justify-between w-[35rem] ">
      <p className="mt-2">
        Total : <span>{totalItems}</span>
      </p>

      <div className="pagination">
        <button onClick={handlePrevPage}>Prev</button>
        {Array.from({ length: numberOfPages }).map((_, index) => {
          const page = index + 1;
          if (
            page === 1 || // Always show the first page button
            page === numberOfPages || // Always show the last page button
            page === currentPage || // Show the current page button
            (page >= currentPage - 2 && page <= currentPage + 2) || // Show 5 pages around the current page
            (currentPage >= 5 && page === 2) || // Show page 2 if currentPage is 5 or greater
            (currentPage <= numberOfPages - 4 && page === numberOfPages - 1) // Show the second-to-last page if currentPage is 5 or more from the end
          ) {
            return (
              <button
                className={currentPage === page ? "selected" : undefined}
                onClick={() => setCurrentPage && setCurrentPage(page)}
                key={page}
              >
                {page}
              </button>
            );
          } else if (
            // Show an ellipsis button when the previous page is not adjacent to the current page
            (page === currentPage - 3 && currentPage > 4) ||
            // Show an ellipsis button when the next page is not adjacent to the current page
            (page === currentPage + 3 && currentPage < numberOfPages - 3)
          ) {
            return (
              <button key={page} disabled>
                ...
              </button>
            );
          }
          return null;
        })}
        <button onClick={handleNextPage}>Next</button>
        {/* Select dropdown for page selection */}
        <input
          type="number"
          defaultValue={currentPage}
          onChange={handleItemsPerPage}
          name="changePage"
          className=" w-14 py-1 border rounded-md text-center ml-4 border-grayForBorder"
          min="1"
          max={numberOfPages}
        />
      </div>
    </div>
  );
};

export default Pagination;
