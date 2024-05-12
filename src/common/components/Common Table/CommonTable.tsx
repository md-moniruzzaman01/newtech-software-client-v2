/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from "react";
import { IoMdEye } from "react-icons/io";
import { NavLink } from "react-router-dom";
import {
  handleAllCheckboxChange,
  handleCheckboxChange,
} from "../../../shared/helpers/handleCheckbox";
import { emptyData } from "../../../shared/config/constaints";
import Button from "../Button";
import { icons } from "../../../shared/libs/Icons";

interface CommonTableProps {
  headerData: string[];
  itemData: Record<string, any>[];
  dataLayout: string[];
  link?: string;
  checkbox?: boolean;
  productData?: boolean;
  checkedRows?: any;
  setCheckedRows?: any;
  btnLink?: string;
  btnValue?: string;
  deleteBtn?: boolean;
  deleteFn?: any;
}

// type TableData = Record<string, any>;

const CommonTable: FC<CommonTableProps> = ({
  headerData,
  checkedRows,
  setCheckedRows,
  link,
  checkbox,
  productData,
  itemData = [],
  dataLayout,
  btnLink,
  btnValue,
  deleteBtn,
  deleteFn,
}) => {
  return (
    <>
      <div className="flex justify-center w-full">
        <div className="overflow-x-auto w-full ">
          <table className="table text-center w-full border border-collapse border-gray-800">
            {/* head */}
            <thead className=" text-black border text-center">
              <tr>
                {checkbox && (
                  <td>
                    <label>
                      <input
                        type="checkbox"
                        className="checkbox form-checkbox h-5 w-5 "
                        checked={checkedRows.length === itemData?.length}
                        onChange={() =>
                          handleAllCheckboxChange(
                            checkedRows,
                            setCheckedRows,
                            itemData,
                            productData
                          )
                        }
                      />
                    </label>
                  </td>
                )}

                {headerData &&
                  headerData?.map((title: string, index: number) => (
                    <th key={index}>{title}</th>
                  ))}
              </tr>
            </thead>
            <tbody className="text-center text-sm">
              {itemData?.length > 0 &&
                itemData?.map((item, index) => (
                  <tr key={index}>
                    {checkbox && (
                      <td className="border">
                        <label>
                          <input
                            type="checkbox"
                            className="checkbox form-checkbox h-5 w-5 "
                            checked={checkedRows.includes(
                              !productData
                                ? item?.id || item?._id
                                : item?.repair[item?.repair?.length - 1]?.id
                            )}
                            onChange={() =>
                              handleCheckboxChange(
                                !productData
                                  ? item?.id || item?._id
                                  : item?.repair[item?.repair?.length - 1]?.id,
                                checkedRows,
                                setCheckedRows
                              )
                            }
                          />
                        </label>
                      </td>
                    )}

                    {dataLayout.map((layout, idx) => (
                      <td key={idx} className="border">
                        {eval(layout) || emptyData}
                      </td>
                    ))}
                    {btnLink && (
                      <td className="border">
                        <NavLink
                          className=" !text-black flex justify-center"
                          target="_blank"
                          to={`${btnLink}/${item?.id}`}
                        >
                          <Button primary mini className="!text-xs ">
                            {btnValue}
                          </Button>
                        </NavLink>
                      </td>
                    )}
                    {deleteBtn && (
                      <td className="border">
                        <div
                          onClick={() => deleteFn(item?.id)}
                          className="text-shadeOfRed text-xl  flex justify-center cursor-pointer"
                        >
                          {icons?.delete}
                        </div>
                      </td>
                    )}
                    {link && (
                      <td className="border">
                        <NavLink
                          className=" !text-black flex justify-center"
                          to={`${link}/${
                            productData
                              ? item?.repair[item?.repair?.length - 1]?.id
                              : item?.id
                          }`}
                        >
                          <IoMdEye />
                        </NavLink>
                      </td>
                    )}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default CommonTable;
