import { NavLink } from "react-router-dom";
import "./Filter.css";
import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const btnStyle =
  "text-black shadow-md hover:text-black py-2 px-5 text-xl rounded-sm";

const Filter = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <div className="flex justify-between items-center font px-[50px] pb-4 pt-5">
        <div className="flex gap-2">
          <div>
            <NavLink to="/" className={btnStyle}>
              <span>All</span>
            </NavLink>
          </div>
          <div>
            <NavLink to="/progress" className={btnStyle}>
              <span>Progress</span>
            </NavLink>
          </div>
          <div>
            <NavLink to="/complete" className={btnStyle}>
              <span>Complete</span>
            </NavLink>
          </div>
          <div>
            <NavLink to="/delivery" className={btnStyle}>
              <span>Delivery</span>
            </NavLink>
          </div>
          <div>
            <NavLink to="/buffer" className={btnStyle}>
              <span>Buffer</span>
            </NavLink>
          </div>
          <div>
            <NavLink to="/good-product" className={btnStyle}>
              <span>Good Products</span>
            </NavLink>
          </div>
        </div>
        <details className="dropdown dropdown-end cursor-pointer">
          <summary
            tabIndex={0}
            role="button"
            className={`${btnStyle} flex items-center gap-2 `}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 31 18"
              fill="none"
            >
              <path
                d="M10.375 16.6562C10.375 16.3164 10.51 15.9905 10.7503 15.7503C10.9906 15.51 11.3164 15.375 11.6562 15.375H19.3438C19.6836 15.375 20.0095 15.51 20.2497 15.7503C20.49 15.9905 20.625 16.3164 20.625 16.6562C20.625 16.9961 20.49 17.322 20.2497 17.5622C20.0095 17.8025 19.6836 17.9375 19.3438 17.9375H11.6562C11.3164 17.9375 10.9906 17.8025 10.7503 17.5622C10.51 17.322 10.375 16.9961 10.375 16.6562ZM5.25 8.96875C5.25 8.62894 5.38499 8.30305 5.62527 8.06277C5.86555 7.82249 6.19144 7.6875 6.53125 7.6875H24.4688C24.8086 7.6875 25.1345 7.82249 25.3747 8.06277C25.615 8.30305 25.75 8.62894 25.75 8.96875C25.75 9.30856 25.615 9.63445 25.3747 9.87473C25.1345 10.115 24.8086 10.25 24.4688 10.25H6.53125C6.19144 10.25 5.86555 10.115 5.62527 9.87473C5.38499 9.63445 5.25 9.30856 5.25 8.96875ZM0.125 1.28125C0.125 0.941441 0.259989 0.615551 0.50027 0.37527C0.740551 0.134989 1.06644 0 1.40625 0H29.5938C29.9336 0 30.2595 0.134989 30.4997 0.37527C30.74 0.615551 30.875 0.941441 30.875 1.28125C30.875 1.62106 30.74 1.94695 30.4997 2.18723C30.2595 2.42751 29.9336 2.5625 29.5938 2.5625H1.40625C1.06644 2.5625 0.740551 2.42751 0.50027 2.18723C0.259989 1.94695 0.125 1.62106 0.125 1.28125Z"
                fill="#888888"
              />
            </svg>
            <span> Filter</span>
          </summary>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-[#fff]  rounded-box w-[400px]"
          >
            <div className="text-black w-full">
              <div className="px-5">
                <h2 className="">Filter</h2>
                <hr />
              </div>
              <form>
                <div className="px-5 space-y-2">
                  <label className="text-lg font-semibold pb-2">Date</label>
                  <div className="flex items-center gap-2 justify-center">
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      className="px-1 py-2 "
                    />
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      className="px-1 py-2 "
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-5 py-5  px-5">
                  <div className="w-full space-y-2">
                    <label className="text-lg font-semibold ">Brand</label>
                    <select className="select select-bordered join-item w-full">
                      <option disabled selected>
                        Brand Name
                      </option>
                      <option>DELL</option>
                      <option>HP</option>
                      <option>MSI</option>
                    </select>
                  </div>

                  <div className="w-full space-y-2">
                    <label className="text-lg font-semibold pb-2">
                      Customer
                    </label>
                    <select className="select select-bordered join-item w-full">
                      <option disabled selected>
                        ALL
                      </option>
                      <option>DELL</option>
                      <option>HP</option>
                      <option>MSI</option>
                    </select>
                  </div>
                  <div className="w-full space-y-2 ">
                    <label className="text-lg font-semibold">Branch</label>
                    <select className="select select-bordered join-item w-full">
                      <option disabled selected>
                        ALL
                      </option>
                      <option>DELL</option>
                      <option>HP</option>
                      <option>MSI</option>
                    </select>
                    <hr />
                  </div>
                </div>

                <div className="flex justify-around items-center">
                  <div>
                    <button className="btn btn-ghost shadow-md">Clear</button>
                  </div>
                  <div>
                    <button className="btn bg-[#0088FF] text-white">
                      Clear
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </ul>
        </details>
      </div>
    </div>
  );
};

export default Filter;
