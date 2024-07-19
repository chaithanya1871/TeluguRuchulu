import { Link } from "react-router-dom";
import InputField from "../../components/InputField";
import { useState } from "react";

const SignUp = () => {
    const [formData, setFormData] = useState<SignUpFormProps>({
        username:'',
        password:'',
        email:'',
    })
    const {username,password,email} = formData;
    const usernameChangeHandler = ()=>{

    }
    const passwordChangeHandler = ()=>{

    }
    const emailChangeHandler = ()=>{

    }

    return (
        <div className=" h-[100vh] w-full flex justify-center items-center">
            <div className=" border w-[40%] shadow-md p-3">
                <div className=" text-center">
                    <h2><Link to='/' className=" font-bold text-black text-2xl text-center"><span className=" text-[#F97316]">Telugu</span>Ruchulu</Link></h2>
                </div>
                <form>
                    <InputField label="username" name="username" value={username} onChangeHandler={usernameChangeHandler} placeholder="Enter username" type="text"/>
                    <InputField label="email" name="email" value={email} onChangeHandler={emailChangeHandler} placeholder="Enter email" type="email"/>
                    <InputField label="password" name="password" value={password} onChangeHandler={passwordChangeHandler} placeholder="Enter password" type="password"/>
                    
                    <div className=" flex justify-center items-center">
                        <button className=" border px-5 py-1 text-center  bg-[#F97316]">SignUp</button>
                    </div>
                    <div className="flex gap-2 p-2 justify-center items-center text-[1rem]">
                    <p className=" text-[0.9rem]">Already have an account?</p>
                    <Link to='/sign-in' className=" font-semibold">Sign In</Link>
                </div>
                    
                </form>
            </div>
        </div>
    );
}
export default SignUp;


export interface SignUpFormProps{
    username:string,
    password:string,
    email:string
}