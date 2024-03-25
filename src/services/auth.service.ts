
import { decodedToken } from "../libs/jwt";
import { getFromLocalStorage, setToLocalStorage } from "../libs/local_storage";
import { authKey } from "../shared/config/constaints";


export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
    return setToLocalStorage(authKey, accessToken as string);
  };
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const getUserInfo = ():any=> {
    const authToken = getFromLocalStorage(authKey);
    if (authToken) {
      const decodedData = decodedToken(authToken) ;
      return decodedData;
    } else {
      return "";
    }
  };
  
  export const isLoggedIn = () => {
    const authToken = getFromLocalStorage(authKey);
    return !!authToken;
  };
  
  export const removeUserInfo = () => {
  
    
   const removeToken=   localStorage.removeItem(authKey);
   window.location.pathname ='/login'
   return removeToken
  };
  
  export const getNewAccessToken = async () => {
    // return await axiosInstance({
    //   url: `${getBaseUrl()}/auth/refresh-token`,
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   withCredentials: true,
    // });
  };