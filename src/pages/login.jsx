import { Link } from "react-router-dom";
import Form from "../components/form";
import Input from "../components/input";
import { fetchPostmanCollection } from '../services/api';
import { Button } from "../components/button";
const Registration = () => {

  const handleRegistration = async (formData) => {
    const URL = `${import.meta.env.VITE_API_URL}auth/login`;
    try {
      const result = await fetchPostmanCollection(formData, URL);
      localStorage.setItem('userData',JSON.stringify(result))
      console.log('Result:', result);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };
  return (
    <div className="flex flex-col">
      <div className="rounded-md border border-gray-500 p-10">
        <div className="font-bold text-lg mb-7">Vite app</div>
        <Form onSubmit={handleRegistration}>
          <Input
            type={"text"}
            id={"email"}
            name={"email"}
            text={"Email"}
            rules={{required:"Email is required", pattern:/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/}}
          />
          <Input
            type={"password"}
            id={"password"}
            name={"password"}
            text={"Password"}
            rules={{required:"Password is required", minLength:6}}
          />
           <Button
              classNames={"text-white bg-indigo-600 hover:bg-indigo-600 mx-auto"}
              type="submit"
              text={"Submit"}
            ></Button>
        </Form>
      </div>
      <div className="flex mt-2">
        <div className="text-gray-500 mr-2">Don't have an account ? </div>
        <Link to="/signup" className="text-blue-600">
          SignUp
        </Link>
      </div>
    </div>
  );
};
export default Registration;
