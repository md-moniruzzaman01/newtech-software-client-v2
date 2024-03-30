import { NavLink, useNavigate } from "react-router-dom";
import Button from "../../../common/components/Button";
import Input from "../../../common/components/Input";
import { useState } from "react";
import swal from "sweetalert";
import { authKey } from "../../../shared/config/constaints";
import { setToLocalStorage } from "../../../shared/helpers/local_storage";

const Login = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const url = "http://16.16.166.48:5000/api/v2/";

  const data = {
    id,
    password,
  };
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const apiUrl = url + "auth/login";

    await fetch(apiUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data.success) {
          localStorage.setItem(authKey, data.data.accessToken);
          localStorage.setItem("refreshToken", data.data.accessToken);
          setToLocalStorage("activeRoute", "true");
          swal("success", "Successfully Logged in");
          navigate("/");
        } else {
          swal("Error!", data.message, "error");
          navigate("/login");
        }
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        swal("Error!", error.message, "error");
      });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md w-full bg-white p-8 rounded shadow-lg">
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
          <Button type="submit" primary>
            Login
          </Button>
        </form>
        <p className="text-sm text-gray-600 mt-4">
          Don't have an account yet?{" "}
          <NavLink to={"/register"}>
            <Button link className="!text-shadeOfBlueLight !bg-transparent">
              Sign up here.
            </Button>
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
