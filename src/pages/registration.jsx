import { Link } from "react-router-dom";
import Form from "../components/form";
import Input from "../components/input";
import { useState } from "react";
import { fetchPostmanCollection } from "../services/api";
import { Button, LoadingButton } from "../components/button";
import TheBody from "../components/theBody";
import Nav from "../Nav";
const Registration = () => {
  const [status, setStatus] = useState(null);
  const [isloading, setIsLoading] = useState(false);

  const handleRegistration = async (formData) => {
    try {
      const URL = `${import.meta.env.VITE_API_URL}auth/register`;
      const result = await fetchPostmanCollection(formData, URL, setIsLoading);
      setStatus(result);
      // setIsLoading(false);
      // localStorage.setItem("userData", JSON.stringify(result));
      console.log("Result:", result);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
  return (
    <div>
      <Nav>
        <Link to="/">
          <Button
            classNames={
              "text-white bg-blue-550 hover:bg-white-550 w-[83px] h-[40px] mt-[14px]"
            }
            // type="submit"
            text={"Login"}
          ></Button>
        </Link>
      </Nav>
      <TheBody>
        <div className="flex flex-col">
          <div className="text-[20px] font-bold">Welcome!</div>
          <div className="text-[14px] mb-3">
            Start managing your finance faster and better
          </div>

          <Form onSubmit={handleRegistration}>
            <Input
              type={"text"}
              id={"name"}
              name={"name"}
              placeholder={"Name"}
              rules={{
                required: "User is required",
                pattern: /^[A-Za-z\s]+$/i,
              }}
            />
            <Input
              type={"text"}
              id={"email"}
              name={"email"}
              placeholder={"Email"}
              rules={{
                required: "Email is required",
                pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              }}
            />
            <Input
              type={"password"}
              id={"password"}
              name={"password"}
              placeholder={"Password"}
              rules={{ required: "Password is required", minLength: 6 }}
            />
            <Input
              type={"text"}
              id={"confirm_password"}
              name={"confirm_password"}
              placeholder={"Confirm Password"}
              rules={{
                required: "Confirm Password is required",
                minLength: 6,
                // validate: (value) => value === document.getElementById("password").value || "Passwords do not match"
              }}
            />

            {isloading ? (
              <LoadingButton
                classNames={"text-white bg-blue-550 hover:bg-white-550 mt-5"}
                // type="submit"
                text={"Loading"}
              ></LoadingButton>
            ) : (
              <Button
                classNames={"text-white bg-blue-550 hover:bg-white-550 mt-5"}
                type="submit"
                text={"SignUp"}
              ></Button>
            )}

            <Link to="/verify_otp"></Link>
          </Form>

          <div className="mx-auto mt-24 w-[400px] border-t-2" />
          {status?.message ===
          "Verification OTP send to your email, Please verify your account" ? (
            <div className="flex mt-2 mx-auto ">
              <div className="text-gray-500 mr-2">Verify OTP</div>
              <Link to="/verify_otp" className="text-blue-600">
                Click here
              </Link>
            </div>
          ) : (
            <div className="flex mt-2 mx-auto ">
              <div className="text-gray-500 mr-2">
                Already have an account yet ?
              </div>
              <Link to="/" className="text-blue-600">
                Login
              </Link>
            </div>
          )}
        </div>
      </TheBody>
    </div>
  );
};
export default Registration;
