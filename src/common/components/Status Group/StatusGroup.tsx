import { FC, useEffect, useState } from "react";
import Button from "../Button";
import DatePicker from "react-datepicker";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

import "react-datepicker/dist/react-datepicker.css";
import InputFilter from "../InputFilter/InputFilter";
import { FilterOptions } from "../../../shared/config/constaints";
import TableStatus from "../TableStatus/TableStatus";
import { statusGroupProps } from "./config/types";
import { useGetBrandsQuery } from "../../../redux/features/api/Brand";
import { filterOptionsForFiler } from "./config/constants";
import { useGetMainCategoryQuery } from "../../../redux/features/api/Category";
import { useNavigate } from "react-router-dom";
import InputFilterById from "../InputFilterById/InputFilterById";

const StatusGroup: FC<statusGroupProps> = ({
  btnGroupValue,
  handleDeleteData,
  handleReturnData,
  isSelected = false,
  isButton = false,
  status=false,
  dltBtnValue = "Delete",
  returnBtnValue = "Return",
}) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [brands, setBrands] = useState([]);
  const [category, setCategory] = useState([]);
  const navigate = useNavigate();

  const {
    data: brandData,
    isError: brandsError,
    isLoading: brandsLoading,
  } = useGetBrandsQuery({});

  const {
    data: categoryData,
    isError: categoryError,
    isLoading: categoryLoading,
  } = useGetMainCategoryQuery({});

  useEffect(() => {
    if (!brandsError && !brandsLoading) {
      setBrands(brandData?.data);
    }
    if (!categoryError && !categoryLoading) {
      setCategory(categoryData?.data);
    }
  }, [
    brandData,
    brandsLoading,
    brandsError,
    categoryData,
    categoryError,
    categoryLoading,
  ]);

  const handleFilter = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const brand = (form.elements.namedItem("brand") as HTMLInputElement)?.value;
    const sort = (form.elements.namedItem("sort") as HTMLInputElement)?.value;
    const branch = (form.elements.namedItem("branch") as HTMLInputElement)
      ?.value;
    const category = (form.elements.namedItem("category") as HTMLInputElement)
      ?.value;
    // Constructing the query parameters
    const queryParams = new URLSearchParams();
    if (sort) {
      queryParams.append("sort", sort);
    }

    if (brand) {
      queryParams.append("brand_name", brand);
    }
    if (branch) {
      queryParams.append("branch", branch);
    }
    if (category) {
      queryParams.append("category", category);
    }

    // Constructing the new URL with the query parameters

    // Setting the new URL
    navigate(`?${queryParams.toString()}`);
  };
  return (
    <div className="flex justify-between items-center  ">
      {isButton ? (
        <div>
          <Button
            mini
            className="mr-2"
            disabled={isSelected}
            primary
            onClick={handleReturnData}
          >
            {returnBtnValue}
          </Button>
          <Button mini disabled={isSelected} danger onClick={handleDeleteData}>
            {dltBtnValue}
          </Button>
        </div>
      ) : (
        <TableStatus btnValues={btnGroupValue || []} status={status} />
      )}
      <div>
        <div className="w-full">
          <Menu as="div" className="relative inline-block text-left">
            <Menu.Button>
              <div className="shadow-md bg-white py-2 px-5 text-xl hover:bg-shadeOfLightBlue hover:!text-white !text-gray-900 rounded-md transition-all duration-300">
                <div className="flex justify-center gap-2 items-center">
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
                </div>
              </div>
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="z-10 absolute w-[400px] right-0 mt-2  origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                <div className="text-black w-full">
                  <div className="px-5">
                    <h2 className="text-2xl py-3 font-semibold">Filter</h2>
                    <hr />
                  </div>
                  <form onSubmit={handleFilter} className="w-full">
                    <div className="px-5 pt-5  w-full">
                      <label className="text-lg font-semibold ">Date</label>
                      <div className="flex items-center gap-2 justify-center pt-2">
                        <DatePicker
                          id="date"
                          placeholderText="From (dd/mm/yyyy)"
                          selected={startDate}
                          onChange={(date: Date) => setStartDate(date)}
                          className="px-1 py-2 w-full border border-black rounded-sm"
                        />
                        <DatePicker
                          placeholderText=" (dd/mm/yyyy)"
                          selected={endDate}
                          onChange={(date: Date) => setEndDate(date)}
                          className="px-1 py-2 w-full border border-black rounded-sm"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-5 py-5  px-5">
                      <div className="w-full space-y-2">
                        <InputFilterById
                          Filter={brands}
                          label="Brand"
                          inputName="brand"
                          placeholder="Select a brand"
                        />
                      </div>

                      <div className="w-full space-y-2">
                        <InputFilter
                          Filter={filterOptionsForFiler}
                          label="Sort By"
                          inputName="sort"
                          placeholder="Sort"
                        />
                      </div>

                      <div className="w-full space-y-2 ">
                        <InputFilterById
                          Filter={category}
                          label="Category"
                          inputName="category"
                          placeholder="Select a Category"
                        />
                      </div>
                      <div className="w-full space-y-2 ">
                        <InputFilter
                          Filter={FilterOptions}
                          label="Branch"
                          inputName="branch"
                          placeholder="Select a Branch"
                        />
                      </div>
                    </div>

                    <div className="flex justify-around items-center pb-5">
                      <div>
                        <Button className="!bg-shadeOfRed !text-white" status>
                          Clear
                        </Button>
                      </div>
                      <div>
                        <Button
                          type="submit"
                          className="!bg-primary !text-white"
                          status
                        >
                          Filter
                        </Button>
                      </div>
                    </div>
                  </form>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default StatusGroup;
