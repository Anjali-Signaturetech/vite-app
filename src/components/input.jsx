const Input = ({type, disabled, text, id, name, defaultValue, required, register, minLength, pattern}) => {
    return (<>
        <div className="space-y-1">
            <label htmlFor={id} className="block text-sm font-medium text-gray-700">
                {text}
            </label>
            <input id={id}
                   name={name}
                   disabled={disabled}
                //    {...register(name, {required: required, minLength: minLength, pattern:pattern})}
                   type={type}
                   autoComplete={type}
                   defaultValue={defaultValue}
                   className="block w-full appearance-none rounded-md border bg-gray-white border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            />
        </div>
    </>)
}

export default Input;