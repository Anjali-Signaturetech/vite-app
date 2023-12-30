import { Link } from "react-router-dom";
import Form from "../components/form";
import Input from "../components/input";
import { useState } from "react";
import { useMutation } from 'react-query';
import { fetchPostmanCollection } from './api';
import { Login_url } from "./urls";
const Registration = () => {
   
   const mutation = useMutation(fetchPostmanCollection);

  const handleRegistration = async (formData) => {
    console.log(formData, "abs")
    try {
      const result = await fetchPostmanCollection(formData, Login_url);
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
        </Form>
        {/* {registrationError && <p style={{ color: 'red' }}>{registrationError}</p>} */}
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
