import Input from "../components/input";
import Form from "../components/form";
import { Button } from "../components/button";
import { Link } from "react-router-dom";
import { fetchPostmanCollection } from "../services/api";
const VerifyOtp = () => {
  const handleOtp = async(formData) => {
    const URL = `${import.meta.env.VITE_API_URL}auth/verify`;
    console.log(formData, "abs");
    try {
      const result = await fetchPostmanCollection(formData, URL);
      console.log("Result:", result);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
  const resendOtp = async(formData) => {
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
    <>
      <div className="flex gap-3">
        <Form onSubmit={handleOtp}>
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
            type={"text"}
            id={"otp"}
            name={"otp"}
            text={"OTP"}
            rules={{ required: "OTP is required" }}
          />

          <div className="flex gap-3">
            <Link to="/signup">
              <Button
                classNames={
                  "text-white bg-indigo-600 hover:bg-indigo-600 mx-auto"
                }
                // type="submit"
                text={"Cancel"}
              />
            </Link>
            <Button
              classNames={"text-white bg-indigo-600 hover:bg-indigo-600 mx-auto"}
              type="submit"
              text={"Submit"}
            ></Button>
          </div>
        </Form>
        <Button
          classNames={"text-white bg-indigo-600 hover:bg-indigo-600 h-9 mt-auto mb-16"}
          text={"Resend Otp"}
          onClick={resendOtp}
        ></Button>
      </div>
    </>
  );
};
export default VerifyOtp;
