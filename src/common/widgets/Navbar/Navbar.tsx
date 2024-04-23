import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import NotificationIcon from "../../../shared/libs/custom icons/NotificationIcon";
import SettingIcon from "../../../shared/libs/custom icons/SettingIcon";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import ProfileIcon from "../../../shared/libs/custom icons/ProfileIcon";
import { getUserInfo, removeUserInfo } from "../../../services/auth.service";
import { authKey } from "../../../shared/config/constaints";
import swal from "sweetalert";
import { useGetUserQuery } from "../../../redux/features/api/users";
import { getFromLocalStorage } from "../../../shared/helpers/local_storage";

interface NavbarProps {
  name?: string;
}

const Navbar: React.FC<NavbarProps> = ({ name = "Hello" }) => {
  const navigate = useNavigate();
  const token = getFromLocalStorage(authKey);
  const handleLogout = () => {
    navigate("/login");
    swal("success", "Successfully logged out");
    removeUserInfo(authKey);
  };
  const { userId } = getUserInfo();
  const { data: userInfo } = useGetUserQuery({ userId, token });

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
                <Menu.Button className="flex justify-center gap-2 items-center bg-transparent border-0 cursor-pointer">
                  <div>
                    <NotificationIcon />
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
                    <div className="bg-solidWhite rounded-md">
                      <h3 className="pt-3  font-semibold text-center">
                        New Buffer In
                      </h3>
                      <h3 className="pt-1 text-center">258963</h3>
                      <hr className="mt-2" />
                      <div className="py-3 pl-5">
                        <p>Notification</p>
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
                <Menu.Button className="flex justify-center gap-2 items-center bg-transparent border-0 cursor-pointer">
                  <SettingIcon />
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
                <Menu.Items className="absolute right-0 mt-2  origin-top-right divide-y  rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                  <div
                    tabIndex={0}
                    className="absolute right-0 mt-3 z-[1] w-52 bg-base-500 shadow"
                  >
                    <div className="bg-solidWhite rounded-md">
                      <h3 className="pt-3 pl-5 font-semibold">Settings</h3>
                      <hr className="mt-2" />
                      <div className="py-3 pl-5">
                        <NavLink
                          className="hover:bg-transparent !bg-transparent"
                          to={"/setting"}
                        >
                          <Button link>Change Password</Button>
                        </NavLink>
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
                <Menu.Button className="flex justify-center gap-2 items-center bg-transparent border-0 cursor-pointer">
                  <ProfileIcon />
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
                <Menu.Items className="absolute right-0 mt-2  origin-top-right divide-y  rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                  <div
                    tabIndex={0}
                    className="absolute right-0 mt-3 z-[1] w-52  shadow"
                  >
                    <div className="bg-solidWhite rounded-md px-2">
                      <h3 className="pt-3  font-semibold ">John Doe</h3>
                      <h3 className="pt-1 ">ID: {userInfo?.data?.id}</h3>
                      <p className="pt-1">{userInfo?.data?.designation}</p>
                      <hr className="mt-2" />
                      <div className="py-3 space-y-1">
                        <div>
                          <NavLink
                            className="!bg-transparent"
                            to={"/my-profile"}
                          >
                            <Button link>My Profile</Button>
                          </NavLink>
                        </div>

                        <div>
                          <NavLink className="!bg-transparent" to={"/setting"}>
                            <Button link>Setting</Button>
                          </NavLink>
                        </div>
                        <Button link onClick={handleLogout}>
                          Logout
                        </Button>
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
