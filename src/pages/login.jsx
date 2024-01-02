import { Link } from "react-router-dom";
import Form from "../components/form";
import Input from "../components/input";
import { fetchPostmanCollection } from "../services/api";
import { Button } from "../components/button";
import TheBody from "../components/theBody";
import Nav from "../Nav";
const Registration = () => {
  const handleRegistration = async (formData) => {
    const URL = `${import.meta.env.VITE_API_URL}auth/login`;
    try {
      const result = await fetchPostmanCollection(formData, URL);
      localStorage.setItem("userData", JSON.stringify(result));
      console.log("Result:", result);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
  return (
    <div>
      <Nav>
        <Link to="/signup">
          <Button
            classNames={
              "text-white bg-blue-550 hover:bg-white-550 w-[183px] h-[40px] mt-[14px]"
            }
            type="submit"
            text={"Create an account"}
          ></Button>
        </Link>
      </Nav>
      <TheBody>
        <div className="flex flex-col">
          <div className="text-[20px] font-bold">Welcome back!</div>
          <div className="text-[14px] mb-3">
            Start managing your finance faster and better
          </div>
          <Form onSubmit={handleRegistration}>
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
            <Button
              classNames={"text-white bg-blue-550 hover:bg-white-550"}
              type="submit"
              text={"Login"}
            ></Button>
          </Form>
          <div className=" text-blue-600 mx-auto mt-3">Forget password?</div>

          <div className="mx-auto mt-44 w-[400px] border-t-2" />
          <div className="flex mt-2 mx-auto ">
            <div className="text-gray-500 mr-2">
              Don't have an account yet ?{" "}
            </div>
            <Link to="/signup" className="text-blue-600">
              SignUp
            </Link>
          </div>
        </div>
      </TheBody>
    </div>
  );
};
export default Registration;
