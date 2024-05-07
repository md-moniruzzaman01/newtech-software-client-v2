/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import NotificationIcon from "../../../shared/libs/custom icons/NotificationIcon";
import SettingIcon from "../../../shared/libs/custom icons/SettingIcon";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import ProfileIcon from "../../../shared/libs/custom icons/ProfileIcon";
import { getUserInfo, removeUserInfo } from "../../../services/auth.service";
import { LuMessageSquare } from "react-icons/lu";
import { authKey, emptyData } from "../../../shared/config/constaints";
import swal from "sweetalert";
import {
  useGetAdminQuery,
  useGetUserQuery,
} from "../../../redux/features/api/users";
import { getFromLocalStorage } from "../../../shared/helpers/local_storage";
import {
  useGetNotificationQuery,
  useMarkAsReadNotificationMutation,
  useUpdateNotificationMutation,
} from "../../../redux/features/api/others";
import { showSwal } from "../../../shared/helpers/SwalShower";

interface NavbarProps {
  name?: string;
}

const Navbar: React.FC<NavbarProps> = ({ name = "Welcome" }) => {
  const navigate = useNavigate();
  const [limit, setLimit] = useState(5);
  const token = getFromLocalStorage(authKey);
  const [updateNotification] = useUpdateNotificationMutation();
  const [markAsRead] = useMarkAsReadNotificationMutation();
  const handleLogout = () => {
    navigate("/login");
    swal("success", "Successfully logged out");
    removeUserInfo(authKey);
  };
  const { userId, _id: id, role } = getUserInfo();
  const { data: userInfo } = useGetUserQuery({
    userId,
    token,
  });
  const { data: userAdminInfo } = useGetAdminQuery({
    userId,
    token,
  });

  const { data: notification } = useGetNotificationQuery({ id, token });
  const handleCheckNotification = async (
    id: string,
    link: string,
    isRead: boolean
  ) => {
    console.log(link);
    if (isRead) {
      navigate(`${link}`);
    } else {
      const result: any = await updateNotification({ id, token });
      console.log(result);
      if (result?.data?.success) {
        navigate(`${result?.data?.link}`);
      } else {
        swal("Error", `${result?.error?.data?.message}`, "error");
      }
    }
  };

  const handleMarkAsRead = async () => {
    const result = await markAsRead({ token });
    showSwal(result);
  };

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
                  <div onClick={() => setLimit(5)}>
                    <NotificationIcon />
                    {notification?.data?.filter((item) => !item.isRead)
                      ?.length > 0 && (
                      <span className="w-[14px] h-[14px] rounded-full bg-shadeOfRed absolute top-0 right-0 flex items-center justify-center text-[12px] text-white">
                        {notification?.data?.filter((item) => !item.isRead)
                          ?.length || 0}
                      </span>
                    )}
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
                    className="absolute right-0 z-10 mt-3  w-72  shadow bg-solidWhite rounded-md"
                  >
                    <div className="flex justify-between items-center p-2">
                      <b>Notification</b>

                      {notification?.data?.filter((item) => !item?.isRead)
                        ?.length > 0 && (
                        <Button
                          onClick={handleMarkAsRead}
                          link
                          className="text-xs"
                        >
                          Mark as Read
                        </Button>
                      )}
                    </div>
                    <hr />
                    {notification?.data?.length ? (
                      notification?.data
                        ?.slice?.(0, limit)
                        ?.map((item, index) => (
                          <div
                            onClick={() =>
                              handleCheckNotification(
                                item?._id,
                                item?.link,
                                item?.isRead
                              )
                            }
                            key={index}
                            className={`${
                              item?.isRead
                                ? "bg-readMessageColor text-linkColor" // Use a subdued color for read messages
                                : "bg-unReadMessageColor text-solidBlack" // Use a darker color for unread messages
                            } rounded-md px-5 pt-3 cursor-pointer`}
                          >
                            <div>
                              <p className="text-sm">
                                {item?.createdAt?.toString()?.slice(0, 10)}
                              </p>
                              <div className="flex justify-center items-center gap-5 pt-1">
                                <div>
                                  <LuMessageSquare className="text-2xl" />
                                </div>
                                <p className="text-sm">{item?.message}</p>
                              </div>
                            </div>
                            <hr className="mt-2" />
                          </div>
                        ))
                    ) : (
                      <div>
                        <div className="flex justify-center items-center gap-2 py-5">
                          <LuMessageSquare className="text-2xl" />
                          {emptyData}
                        </div>
                      </div>
                    )}
                    {notification?.data?.length >= limit && (
                      <div className="text-center py-2 bg-solidWhite">
                        <Button link onClick={() => setLimit(limit + 5)}>
                          See More...
                        </Button>
                      </div>
                    )}
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
                          to={`${
                            role === "admin"
                              ? "/change-password"
                              : "/user-change-password"
                          }`}
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
                      <h3 className="pt-3  font-semibold ">
                        {" "}
                        {userAdminInfo?.data
                          ? userAdminInfo?.data?.name?.firstName +
                            " " +
                            userAdminInfo?.data?.name?.lastName
                          : userInfo?.data &&
                            userInfo?.data?.name?.firstName +
                              " " +
                              userInfo?.data?.name?.lastName}
                      </h3>
                      <h3 className="pt-1 ">
                        ID:{" "}
                        {userAdminInfo?.data
                          ? userAdminInfo?.data?.id
                          : userInfo?.data && userInfo?.data?.id}
                      </h3>
                      <p className="pt-1">
                        {" "}
                        {userAdminInfo?.data
                          ? userAdminInfo?.data?.designation
                          : userInfo?.data && userInfo?.data?.designation}
                      </p>
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
