import { useState } from "react";
import InputField from "../../components/InputField";
import { Link } from "react-router-dom";


const SignIn = () => {
    const [formData, setFormData] = useState<SignInFormProps>({
        username:'',
        password:''
    })
    const {username,password} = formData;
    const usernameChangeHandler = ()=>{

    }
    const passwordChangeHandler = ()=>{

    }
    return (
        <div className=" h-[100vh] w-full flex justify-center items-center">
            <div className=" border w-[40%] shadow-md p-3">
                <div className=" text-center">
                    <h2><Link to='/' className=" font-bold text-black text-2xl text-center"><span className=" text-[#F97316]">Telugu</span>Ruchulu</Link></h2>
                </div>
                <form>
                    <InputField label="username" name="username" value={username} onChangeHandler={usernameChangeHandler} placeholder="Enter username" type="text"/>
                    <InputField label="password" name="password" value={password} onChangeHandler={passwordChangeHandler} placeholder="Enter password" type="password"/>
                    <div className=" flex justify-center items-center">
                        <button className=" border px-5 py-1 text-center  bg-[#F97316]">SignIn</button>
                    </div>
                    <div className="flex gap-2 p-2 justify-center items-center text-[1rem]">
                    <p className=" text-[0.9rem]">Don't have an account?</p>
                    <Link to='/sign-up' className=" font-semibold">Sign up</Link>
                </div>
                    
                </form>
            </div>
        </div>
    );
};

export default SignIn;


export interface SignInFormProps{
    username:string,
    password:string
}