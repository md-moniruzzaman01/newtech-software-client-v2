import { useNavigate } from "react-router-dom";
import Button from "../../../common/components/Button";
import Input from "../../../common/components/Input";
import { useEffect, useState } from "react";
import swal from "sweetalert";
import { authKey } from "../../../shared/config/constaints";
import {
  getFromLocalStorage,
  setToLocalStorage,
} from "../../../shared/helpers/local_storage";
import { SERVER_URL } from "../../../shared/config/secret.ts";
import Modal from "../../../common/components/Modal/Modal";
import { getUserInfo } from "../../../services/auth.service";

const Login = () => {
  const navigate = useNavigate();
  const [activeRoute, setActiveRoute] = useState(true);

  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const activeRouteValue = getFromLocalStorage("activeRoute");
    if (activeRouteValue) {
      setActiveRoute(JSON.parse(activeRouteValue));
    }
  }, [activeRoute]);

  const data = {
    id,
    password,
  };
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const apiUrl = SERVER_URL + "/auth/login";
    setIsLoading(true);
    await fetch(apiUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          localStorage.setItem(authKey, data.data.accessToken);
          localStorage.setItem("refreshToken", data.data.accessToken);
          setToLocalStorage("activeRoute", "true");
          const user = getUserInfo();

          if (data?.data?.needsPasswordChange) {
            swal({
              title: "Login Successful",
              text: "You need to change your password. Would you like to proceed?",
              icon: "success",
              buttons: ["Later", "Change Password"],
              dangerMode: true,
            }).then((willChange) => {
              if (willChange) {
                navigate("/user-change-password");
              }
            });
          } else {
            swal({
              title: "Success",
              text: `${data?.message}`,
              icon: "success",
            });
          }

          if (activeRoute === true) {
            if (user?.role === "admin") {
              navigate("/");
            } else {
              navigate("/engineer-dashboard");
            }
          } else if (activeRoute === false) {
            if (user?.role === "admin") {
              navigate("/services");
            } else {
              navigate("/service-engineer-dashboard");
            }
          }
        } else {
          swal("Error!", data.message, "error");
          navigate("/login");
        }
      })
      .catch((error) => {
        swal("Error!", error.message, "error");
      });
    setIsLoading(false);
  };

  const handleSendId = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    const id = (form.elements.namedItem("id") as HTMLInputElement)?.value;

    const fullData = {
      id,
    };
    console.log(fullData);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div
        className={`max-w-md w-full rounded-xl ${
          isOpen ? "blur-sm" : "bg-solidWhite"
        } p-8 rounded shadow-lg`}
      >
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <Input
              labelName="ID"
              inputName="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <Input
              labelName="Password"
              inputType="password"
              inputName="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button loading={isLoading} type="submit" primary>
            Login
          </Button>
        </form>
        <Button onClick={() => setIsOpen(true)} link className="mt-5">
          Forget Password
        </Button>
      </div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} header={"Forget Password"}>
        <form onSubmit={handleSendId}>
          <Input required inputName="id" />
          <div className="mt-5">
            <Button>Submit</Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default Login;
