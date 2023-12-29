import { Link } from "react-router-dom";
import Form from "../components/form";
import Input from "../components/input";
const Login = () => {
  return (
    <div className="flex flex-col">
      <div className="rounded-md border border-gray-500 p-10">
        <div className="font-bold text-lg mb-7">Vite app</div>
        <Form>
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
        </Form>
      </div>
      <div className="flex mt-2">
        <div className="text-gray-500 mr-2">Don't have an account ? </div>
        <Link to="/signup" className="text-blue-600">
             Signup
        </Link>
        
      </div>
    </div>
  );
};
export default Login;
