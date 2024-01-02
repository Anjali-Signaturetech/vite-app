import { Link } from "react-router-dom";
import Form from "../components/form";
import Input from "../components/input";
import { useState } from "react";
import { fetchPostmanCollection } from "../services/api";
import { Button } from "../components/button";
const Registration = () => {
  const [status, setStatus] = useState(null);

  const handleRegistration = async (formData) => {
    try {
      const URL = `${import.meta.env.VITE_API_URL}auth/register`;
      const result = await fetchPostmanCollection(formData, URL);
      setStatus(result);
      // localStorage.setItem("userData", JSON.stringify(result));
      console.log("Result:", result);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
  return (
    <div className="flex flex-col">
      <div className="rounded-md border border-gray-500 p-10">
        <div className="font-bold text-lg mb-7">Vite app</div>
        <Form onSubmit={handleRegistration}>
          <Input
            type={"text"}
            id={"name"}
            name={"name"}
            text={"Username"}
            rules={{ required: "User is required", pattern: /^[A-Za-z\s]+$/i }}
          />
          <Input
            type={"text"}
            id={"email"}
            name={"email"}
            text={"Email"}
            rules={{
              required: "Email is required",
              pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            }}
          />
          <Input
            type={"password"}
            id={"password"}
            name={"password"}
            text={"Password"}
            rules={{ required: "Password is required", minLength: 6 }}
          />
          <Input
            type={"text"}
            id={"confirm_password"}
            name={"confirm_password"}
            text={"Confirm Password"}
            rules={{
              required: "Confirm Password is required",
              minLength: 6,
              // validate: (value) => value === document.getElementById("password").value || "Passwords do not match"
            }}
          />
          <Button
            classNames={"text-white bg-indigo-600 hover:bg-indigo-600 mx-auto"}
            type="submit"
            text={"Submit"}
          ></Button>
        </Form>
        {/* {registrationError && <p style={{ color: 'red' }}>{registrationError}</p>} */}
      </div>
      {status?.message ===
      "Verification OTP send to your email, Please verify your account" ? (
        <div className="flex ">
          <div className="text-gray-500 mr-2">{status.message}</div>
          <Link to="/verify_otp" className="text-blue-600">
            Click Here
          </Link>
        </div>
      ) : (
        <div className="flex mt-2">
          <div className="text-gray-500 mr-2">Already have an account ? </div>
          <Link to="/" className="text-blue-600">
            Login
          </Link>
        </div>
      )}
    </div>
  );
};
export default Registration;
