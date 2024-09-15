import React, { useEffect, useState } from "react";
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
  const [inputValue, setInputValue] = useState<string | number>(currentPage);
  const numberOfPages = Math.ceil(totalItems / limit) || 0;

  useEffect(() => {
    if (currentPage > numberOfPages) {
      setCurrentPage?.(1);
    }
  }, [currentPage, numberOfPages, setCurrentPage]);

  useEffect(() => {
    setInputValue(currentPage);
  }, [currentPage]);

  if (totalItems <= 0) {
    return null;
  }

  const handleItemsPerPage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value === "" ? "" : parseInt(e.target.value, 10);
    setInputValue(value);

    if (
      setCurrentPage &&
      typeof value === "number" &&
      value <= numberOfPages &&
      value >= 1
    ) {
      setCurrentPage(value);
    }
  };

  const handleBlur = () => {
    if (inputValue === "") {
      setInputValue(currentPage);
    } else if (typeof inputValue === "number") {
      if (inputValue < 1) {
        setInputValue(1);
        setCurrentPage?.(1);
      } else if (inputValue > numberOfPages) {
        setInputValue(numberOfPages);
        setCurrentPage?.(numberOfPages);
      }
    }
  };

  const handlePrevPage = () => {
    if (setCurrentPage && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (setCurrentPage && currentPage < numberOfPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    if (numberOfPages <= 5) {
      for (let i = 1; i <= numberOfPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        pageNumbers.push(numberOfPages);
      } else if (currentPage > numberOfPages - 3) {
        pageNumbers.push(1);
        pageNumbers.push("...");
        for (let i = numberOfPages - 3; i <= numberOfPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        pageNumbers.push(1);
        pageNumbers.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        pageNumbers.push(numberOfPages);
      }
    }

    return pageNumbers.map((page, index) =>
      typeof page === "number" ? (
        <button
          className={currentPage === page ? "selected" : undefined}
          onClick={() => setCurrentPage?.(page)}
          key={index}
        >
          {page}
        </button>
      ) : (
        <button key={index} disabled>
          {page}
        </button>
      )
    );
  };

  return (
    <div className="flex justify-between w-[40rem] bg-grayForBorder rounded-md p-2 ">
      <p className="mt-2">
        Total: <span>{totalItems}</span>
      </p>

      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Prev
        </button>
        {renderPageNumbers()}
        <button
          onClick={handleNextPage}
          disabled={currentPage === numberOfPages}
        >
          Next
        </button>
        <input
          type="number"
          value={inputValue}
          onChange={handleItemsPerPage}
          onBlur={handleBlur}
          name="changePage"
          className="w-14 py-1 border rounded-md text-center ml-4 border-grayForBorder"
          min="1"
          max={numberOfPages}
        />
      </div>
    </div>
  );
};

export default Pagination;
