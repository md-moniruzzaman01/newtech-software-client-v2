/* eslint-disable @typescript-eslint/no-explicit-any */
// import { decodedToken } from "../shared/helpers/jwt";
import {
  getFromLocalStorage,
  setToLocalStorage,
} from "../shared/helpers/local_storage";
import { authKey } from "../shared/config/constaints";
import { decodedToken } from "../shared/helpers/jwt";

export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  return setToLocalStorage(authKey, accessToken as string);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getUserInfo = (): any => {
  const authToken = getFromLocalStorage(authKey);
  if (authToken) {
    const decodedData = decodedToken(authToken);

    return decodedData;
  } else {
    return "";
  }
};

export const isLoggedIn = () => {
  const authToken = getFromLocalStorage(authKey);
  return !!authToken;
};

export const removeUserInfo = (key: string) => {
  return localStorage.removeItem(key);
};

export const getNewAccessToken = async () => {
  // return await axiosInstance({
  //   url: `${getBaseUrl()}/auth/refresh-token`,
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   withCredentials: true,
  // });
};

export const isUserAdmin = (): any => {
  const authToken = getFromLocalStorage(authKey);
  if (authToken) {
    const decodedData = decodedToken(authToken);
    if (decodedData?.role === "admin") {
      return true;
    } else {
      return false;
    }
  } else {
    return "";
  }
};
