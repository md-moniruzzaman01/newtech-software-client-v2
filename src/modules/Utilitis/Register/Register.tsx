import { useState } from "react";
import Input from "../../../common/components/Input";
import Button from "../../../common/components/Button";
import { NavLink } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(email, password);
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md w-full bg-white p-8 rounded shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Register</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <Input
              inputType="email"
              labelName="Email Address"
              inputName="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            Register
          </Button>
        </form>
        <p className="text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <NavLink to={"/login"}>
            <Button link className="!text-shadeOfBlueLight !bg-transparent">
              Login here.
            </Button>
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Register;
