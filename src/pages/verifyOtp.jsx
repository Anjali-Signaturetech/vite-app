import { useState } from "react";
import Input from "../components/input";
import Form from "../components/form";
import { Button, LoadingButton } from "../components/button";
import { Link } from "react-router-dom";
import { fetchPostmanCollection } from "../services/api";
import TheBody from "../components/theBody";
import Nav from "../Nav";
const VerifyOtp = () => {
  const [isloading, setIsLoading] = useState(false);
  const handleOtp = async (formData) => {
    const URL = `${import.meta.env.VITE_API_URL}auth/otp/verify`;
    console.log(formData, "abs");
    try {
      const result = await fetchPostmanCollection(formData, URL, setIsLoading);
      console.log("Result:", result);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
  const resendOtp = async (formData) => {
    // console.log("Otp entered succeddfully");
    console.log(formData, "abs");
    // try {
    //   const result = await fetchPostmanCollection(formData, Verify_Url);
    //   console.log("Result:", result);
    // } catch (error) {
    //   console.error("Error:", error.message);
    // }
  };
  return (
    <div>
      <Nav>
        <Link to="/">
          <Button
            classNames={
              "text-white bg-blue-550 hover:bg-white-550 w-[183px] h-[40px] mt-[14px]"
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
          <Form onSubmit={handleOtp}>
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
              type={"text"}
              id={"otp"}
              name={"otp"}
              placeholder={"Enter OTP"}
              rules={{ required: "OTP is required" }}
            />
            {isloading ? (
              <LoadingButton
                classNames={"text-white bg-blue-550 hover:bg-white-550"}
                // type="submit"
                text={"Verify"}
              ></LoadingButton>
            ) : (
              <Button
                classNames={"text-white bg-blue-550 hover:bg-white-550"}
                type="submit"
                text={"Verify"}
              ></Button>
            )}
          </Form>
          <div className=" text-blue-600 mx-auto mt-3">Resend OTP</div>

          <div className="mx-auto mt-44 w-[400px] border-t-2" />
          <div className="flex mt-2 mx-auto ">
            <div className="text-gray-500 mr-2">
              Already have an account yet ?{" "}
            </div>
            <Link to="/" className="text-blue-600">
              Login
            </Link>
          </div>
        </div>
      </TheBody>
    </div>
  );
};
export default VerifyOtp;
