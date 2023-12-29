import { Link } from "react-router-dom";
import Form from "../components/form";
import Input from "../components/input";
const Registration = () => {
  return (
    <div className="flex flex-col">
      <div className="rounded-md border border-gray-500 p-10">
        <div className="font-bold text-lg mb-7">Vite app</div>
        <Form>
          <Input
            type={"text"}
            id={"name"}
            required={true}
            name={"name"}
            text={"Username"}
            pattern={/^[A-Za-z\s]+$/i}
          />
          <Input
            type={"text"}
            id={"email"}
            //   register={register}
            required={true}
            name={"email"}
            text={"Email"}
            pattern={/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/}
          />
          <Input
            type={"text"}
            id={"password"}
            required={true}
            name={"password"}
            text={"Password"}
          />
          <Input
            type={"text"}
            id={"confirmpassword"}
            required={true}
            name={"confirmpassword"}
            text={"Confirm password"}
          />
        </Form>
      </div>
      <div className="flex mt-2">
        <div className="text-gray-500 mr-2">Already have an account ? </div>
        <Link to="/" className="text-blue-600">
          Login
        </Link>
      </div>
    </div>
  );
};
export default Registration;
