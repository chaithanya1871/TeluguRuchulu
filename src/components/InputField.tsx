export interface InputFieldProps{
    name:string,
    value:string,
    onChangeHandler:React.ChangeEventHandler<HTMLInputElement>,
    placeholder:string,
    label:string,
    type:string


}

const InputField = ({label,name,value,onChangeHandler,placeholder,type}:InputFieldProps) => {
    return (
        <div className="flex flex-col w-full p-2">
            <label className=" font-bold">{label}</label>
            <input name={name} placeholder={placeholder} onChange={onChangeHandler} value={value} type={type} className=" p-2 outline-none border focus:border-orange-200"/>
            
        </div>
    );
};

export default InputField;