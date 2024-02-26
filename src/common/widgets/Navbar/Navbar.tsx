import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

interface NavbarProps {
  name?: string;
}

const Navbar: React.FC<NavbarProps> = ({ name = "Hello" }) => {
  return (
    <div>
      <div className="flex justify-between items-center  pt-[36px]">
        <div>
          <h1 className="text-2xl font-semibold">{name}</h1>
        </div>
        <div className="flex justify-center items-center gap-10">
          {/* notification icon */}
          <div>
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="flex justify-center gap-2 items-center">
                  <div>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="24" height="24" fill="#F5F5F5" />
                      <g id="Wireframe - 12">
                        <rect
                          width="1920"
                          height="1024"
                          transform="translate(-1632 -61)"
                          fill="#FAFAFA"
                        />
                        <g id="mdi:bell-outline">
                          <path
                            id="Vector"
                            d="M10 21H14C14 22.1 13.1 23 12 23C10.9 23 10 22.1 10 21ZM21 19V20H3V19L5 17V11C5 7.9 7 5.2 10 4.3V4C10 2.9 10.9 2 12 2C13.1 2 14 2.9 14 4V4.3C17 5.2 19 7.9 19 11V17L21 19ZM17 11C17 8.2 14.8 6 12 6C9.2 6 7 8.2 7 11V18H17V11Z"
                            fill="#888888"
                          />
                        </g>
                      </g>
                    </svg>
                    <span className="w-[14px] h-[14px] rounded-full bg-[#FF0032] absolute top-0 right-0 flex items-center justify-center text-[12px] text-white">
                      8
                    </span>
                  </div>
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 mt-2  origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                  <div
                    tabIndex={0}
                    className="absolute right-0 z-10 mt-3  w-52 bg-base-500 shadow"
                  >
                    <div className="bg-grayWhite">
                      <span className="font-bold text-lg">8 Items</span>
                      <span className="text-info">Subtotal: $999</span>
                      <div className="card-actions">
                        <button className="btn btn-primary btn-block">
                          View cart
                        </button>
                      </div>
                    </div>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>

          {/* setting icon */}
          <div>
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="flex justify-center gap-2 items-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="ic:baseline-settings">
                      <path
                        id="Vector"
                        d="M19.1405 12.94C19.1805 12.64 19.2005 12.33 19.2005 12C19.2005 11.68 19.1805 11.36 19.1305 11.06L21.1605 9.48003C21.2479 9.40793 21.3077 9.30772 21.3296 9.19649C21.3515 9.08527 21.3341 8.96989 21.2805 8.87003L19.3605 5.55003C19.3039 5.44959 19.2137 5.3724 19.1057 5.33214C18.9977 5.29187 18.8789 5.29112 18.7705 5.33003L16.3805 6.29003C15.8805 5.91003 15.3505 5.59003 14.7605 5.35003L14.4005 2.81003C14.3827 2.69556 14.3246 2.59123 14.2365 2.516C14.1484 2.44077 14.0363 2.39962 13.9205 2.40003H10.0805C9.84045 2.40003 9.65045 2.57003 9.61045 2.81003L9.25045 5.35003C8.66045 5.59003 8.12045 5.92003 7.63045 6.29003L5.24045 5.33003C5.02045 5.25003 4.77045 5.33003 4.65045 5.55003L2.74045 8.87003C2.62045 9.08003 2.66045 9.34003 2.86045 9.48003L4.89045 11.06C4.84045 11.36 4.80045 11.69 4.80045 12C4.80045 12.31 4.82045 12.64 4.87045 12.94L2.84045 14.52C2.75298 14.5921 2.69321 14.6923 2.67132 14.8036C2.64944 14.9148 2.66681 15.0302 2.72045 15.13L4.64045 18.45C4.76045 18.67 5.01045 18.74 5.23045 18.67L7.62045 17.71C8.12045 18.09 8.65045 18.41 9.24045 18.65L9.60045 21.19C9.65045 21.43 9.84045 21.6 10.0805 21.6H13.9205C14.1605 21.6 14.3605 21.43 14.3905 21.19L14.7505 18.65C15.3405 18.41 15.8805 18.09 16.3705 17.71L18.7605 18.67C18.9805 18.75 19.2305 18.67 19.3505 18.45L21.2705 15.13C21.3905 14.91 21.3405 14.66 21.1505 14.52L19.1405 12.94ZM12.0005 15.6C10.0205 15.6 8.40045 13.98 8.40045 12C8.40045 10.02 10.0205 8.40003 12.0005 8.40003C13.9805 8.40003 15.6005 10.02 15.6005 12C15.6005 13.98 13.9805 15.6 12.0005 15.6Z"
                        fill="#888888"
                      />
                    </g>
                  </svg>
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 mt-2  origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                  <div
                    tabIndex={0}
                    className="absolute right-0 mt-3 z-[1] w-52 bg-base-500 shadow"
                  >
                    <div className="bg-grayWhite">
                      <span className="font-bold text-lg">8 Items</span>
                      <span className="text-info">Subtotal: $999</span>
                      <div className="card-actions">
                        <button className="btn btn-primary btn-block">
                          View cart
                        </button>
                      </div>
                    </div>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
          {/* user icon  */}
          <div>
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="flex justify-center gap-2 items-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="ic:outline-account-circle">
                      <path
                        id="Vector"
                        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM7.35 18.5C8.66 17.56 10.26 17 12 17C13.74 17 15.34 17.56 16.65 18.5C15.34 19.44 13.74 20 12 20C10.26 20 8.66 19.44 7.35 18.5ZM18.14 17.12C16.3884 15.7457 14.2264 14.9988 12 14.9988C9.77362 14.9988 7.6116 15.7457 5.86 17.12C4.65692 15.6853 3.9983 13.8723 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 13.95 19.3 15.73 18.14 17.12Z"
                        fill="#888888"
                      />
                      <path
                        id="Vector_2"
                        d="M12 6C10.07 6 8.5 7.57 8.5 9.5C8.5 11.43 10.07 13 12 13C13.93 13 15.5 11.43 15.5 9.5C15.5 7.57 13.93 6 12 6ZM12 11C11.17 11 10.5 10.33 10.5 9.5C10.5 8.67 11.17 8 12 8C12.83 8 13.5 8.67 13.5 9.5C13.5 10.33 12.83 11 12 11Z"
                        fill="#888888"
                      />
                    </g>
                  </svg>
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 mt-2  origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                  <div
                    tabIndex={0}
                    className="absolute right-0 mt-3 z-[1] w-52 bg-base-500 shadow"
                  >
                    <div className="bg-grayWhite">
                      <span className="font-bold text-lg">8 Items</span>
                      <span className="text-info">Subtotal: $999</span>
                      <div className="card-actions">
                        <button className="btn btn-primary btn-block">
                          View cart
                        </button>
                      </div>
                    </div>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
