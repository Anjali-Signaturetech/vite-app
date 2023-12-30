import { useForm, FormProvider, useFormContext } from 'react-hook-form';

const Input = ({type, disabled, text, id, name, defaultValue, rules}) => {
    const { register, formState: { errors } } = useFormContext();
    const validateConfirmPassword = () => {
        return document.getElementById('confirmpassword')?.value === document.getElementById('password')?.value;
      };
    
    return (<>
        <div className="space-y-1">
            <label htmlFor={id} className="block text-sm font-medium text-gray-700">
                {text}
            </label>
            <input id={id}
                   name={name}
                   disabled={disabled}
                   {...register(name,{... rules, validate: validateConfirmPassword })}
                   type={type}
                   autoComplete={type}
                   defaultValue={defaultValue}
                   className="block w-full appearance-none rounded-md border bg-gray-white border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            />
            {/* {console.log(errors)} */}
             {name==="name" && errors && errors.name?.type==="required" && <p style={{ color: 'red' }}>{errors.name.message}</p>}
             {name==="email" && errors && errors.email?.type==="required" && <p style={{ color: 'red' }}>{errors.email.message}</p>}
             {name==="password" && errors && errors.password?.type==="required" && <p style={{ color: 'red' }}>{errors.password.message}</p>}
             {name==="confirmpassword" && errors && errors.confirmpassword?.type==="required" && <p style={{ color: 'red' }}>{errors.confirmpassword.message}</p>}

             {name==="name" && errors?.name?.type==="pattern" && <p style={{ color: 'red' }}>Please enter correct pattern</p>}
             {name==="email" && errors?.email?.type==="pattern" && <p style={{ color: 'red' }}>Please enter correct pattern</p>}
             {name==="password" && errors?.password?.type==="minLength" && <p style={{ color: 'red' }}>Minmum 6 characters is required</p>}
             {name==="confirmpassword" &&errors?.confirmpassword?.type==="minLength" && <p style={{ color: 'red' }}>Minmum 6 characters is required</p>}
             {name==="confirmpassword" && errors?.confirmpassword?.type==="validate" && <p style={{ color: 'red' }}>Password do not match</p>}
        </div>
    </>)
}

export default Input;