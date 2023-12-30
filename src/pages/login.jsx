import { Link } from "react-router-dom";
import Form from "../components/form";
import Input from "../components/input";
const Login = () => {
  const handleSubmit = data => console.log(data);
  return (
    <div className="flex flex-col">
      <div className="rounded-md border border-gray-500 p-10">
        <div className="font-bold text-lg mb-7">Vite app</div>
        <Form onSubmit={handleSubmit}>
          <Input
            type={"text"}
            id={"email"}
            name={"email"}
            text={"Email"}
            rules={{required:"Email is required", pattern:/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/}}
          />
          <Input
            type={"text"}
            id={"password"}
            name={"password"}
            text={"Password"}
            rules={{required:"Password is required", minLength:6}}
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
