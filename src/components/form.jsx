import {Button} from "../components/button.jsx";
  import { useForm, FormProvider, useFormContext } from 'react-hook-form';

  const Form = ({
   children, onSubmit
  }) => {

    const methods = useForm();
   
  
    // const onSubmit = async (data) => {
      
    //         console.log("submit successfully")
      
    // };
  
   
    return (
      <FormProvider {...methods}>
        
        <form
          // method="POST"
          onSubmit={methods.handleSubmit(onSubmit)}
          className="space-y-6 max-w-lg w-96 "
        >
         {children}
         <Button
              classNames={"text-white bg-indigo-600 hover:bg-indigo-600 mx-auto"}
              type="submit"
              text={"Submit"}
            ></Button>
        </form>
       
      </FormProvider>
    );
  };
  
  export default Form;
  