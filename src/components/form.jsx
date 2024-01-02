import {Button} from "../components/button.jsx";
  import { useForm, FormProvider, useFormContext } from 'react-hook-form';

  const Form = ({
   children, onSubmit
  }) => {

    const methods = useForm();
   
    return (
      <FormProvider {...methods}>
        
        <form
          // method="POST"
          onSubmit={methods.handleSubmit(onSubmit)}
          className="space-y-6 max-w-lg w-96 "
        >
         {children}
        
        </form>
       
      </FormProvider>
    );
  };
  
  export default Form;
  