import { useState } from "react";
import InputField from "../../components/InputField";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { setUserInfoInLocalStorage } from "../../utils/jwttoken";
import { toast } from "react-toastify";


const SignIn = () => {
    const [formData, setFormData] = useState<SignInFormProps>({
        username:'',
        password:''
    })
    const [ErrorMsg, setErrorMsg] = useState<ErrorMSGProps>({
        username_error:'',
        password_error:''
    })

    const {username,password} = formData;
    const {username_error, password_error} = ErrorMsg
    const usernameChangeHandler = (e:React.ChangeEvent<HTMLInputElement>)=>{
        if(e.target.value.length<5 || e.target.value.length>20){
            setFormData({...formData,username:e.target.value})
            setErrorMsg({...ErrorMsg, username_error:"Username must contain between 6 and 9 letters."})

        }
        else{
            setErrorMsg({...ErrorMsg, username_error:""})
            setFormData({...formData,username:e.target.value})
        }
        

    }
    const passwordChangeHandler = (e:React.ChangeEvent<HTMLInputElement>)=>{
        if(e.target.value.length<5){
            setFormData({...formData, password:e.target.value})
            setErrorMsg({...ErrorMsg, password_error:"Password must contain atleast 5 characters"})

        }
        else{
            setErrorMsg({...ErrorMsg, password_error:""})
            setFormData({...formData, password:e.target.value})
        }

    }
    const navigate = useNavigate();
    const signIn = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if(!(username_error || password_error)){
            const data = new FormData();
            data.append('username',username)
            data.append('password',password)
            axios.post('http://localhost:8000/api/users/token/',data,{
                headers:{
                    "Content-type": "multipart/form-data",
                }
            }).then((response)=>{
                const token = response.data?.access
                setUserInfoInLocalStorage(token);
                console.log(response.data);
                navigate('/');
                toast.success("sign in successfull",{
                    position:"bottom-center"
                })

            }).catch((error)=>{
                console.log(error);
            })
        }
        
    }
    return (
        <div className=" h-[100vh] w-full flex justify-center items-center">
            <div className=" border w-[40%] shadow-md p-3">
                <div className=" text-center">
                    <h2><Link to='/' className=" font-bold text-black text-2xl text-center"><span className=" text-[#F97316]">Telugu</span>Ruchulu</Link></h2>
                </div>
                <form onSubmit={signIn} noValidate>
                    <InputField label="username" name="username" value={username} onChangeHandler={usernameChangeHandler} placeholder="Enter username" type="text" errorMsg={username_error}/>
                    <InputField label="password" name="password" value={password} onChangeHandler={passwordChangeHandler} placeholder="Enter password" type="password" errorMsg={password_error}/>
                    <div className=" flex justify-center items-center">
                        <button type="submit" className=" border px-5 py-1 text-center  bg-[#F97316] rounded-md">SignIn</button>
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
export interface ErrorMSGProps{
    username_error:string,
    password_error:string
}