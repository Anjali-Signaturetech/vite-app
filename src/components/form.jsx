import {
    Button,
  } from "../components/button.jsx";
  import Input from "../components/input.jsx";
  import { useForm } from "react-hook-form";

  const Form = ({
   children
  }) => {
    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm();
   
  
    const onSubmit = async (data) => {
      
            console.log("submit successfully")
      
    };
  
   
    return (
      <>
        
        <form
          onSubmit={handleSubmit(onSubmit)}
          method="POST"
          className="space-y-6 max-w-lg w-96 "
        >
         {children}
         <Button
              classNames={"text-white bg-indigo-600 hover:bg-indigo-600 mx-auto"}
              type="submit"
              text={"Submit"}
              // onClick={()=>setIsLoading(true)}
            ></Button>
        </form>
       
      </>
    );
  };
  
  export default Form;
  