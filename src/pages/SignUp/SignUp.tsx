import { Link, useNavigate } from "react-router-dom";
import InputField from "../../components/InputField";
import { useState } from "react";
import validator from 'validator';
import axios from "axios";
import { toast } from "react-toastify";

const SignUp = () => {
    const [formData, setFormData] = useState<SignUpFormProps>({
        username:'',
        password:'',
        email:'',
    })
    const [ErrorMsg, setErrorMsg] = useState<ErrorMSGProps>({
        username_error:'',
        password_error:'',
        email_error:''
    })
    const {username_error, password_error,email_error} = ErrorMsg
    const {username,password,email} = formData;
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
    const emailChangeHandler = (e:React.ChangeEvent<HTMLInputElement>)=>{
        if(!validator.isEmail(e.target.value)){
            setFormData({...formData,email:e.target.value});
            setErrorMsg({...ErrorMsg, email_error:"Invalid Email"})
        }
        else{
            setFormData({...formData,email:e.target.value});
            setErrorMsg({...ErrorMsg, email_error:""})
        }
    }
    const signUp = (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        if(!(username_error && password_error && email_error)){
            const data = new FormData();
            data.append('username',username)
            data.append('password',password),
            data.append('email',email)
            axios.post('http://localhost:8000/api/users/user/register/',data,{
                headers:{
                    "Content-type": "multipart/form-data",
                }
            }).then((response)=>{
                console.log(response.data)
                toast.success("sign-up success",{
                    position:'bottom-center'
                })
                navigate('/sign-in');
            }).catch((error)=>{
                console.log(error);
                toast.error("error occureddd while submitting form",{
                    position:'bottom-center'
                })
            })
        }
    }
    return (
        <div className=" h-[100vh] w-full flex justify-center items-center">
            <div className=" border w-[40%] shadow-md p-3">
                <div className=" text-center">
                    <h2><Link to='/' className=" font-bold text-black text-2xl text-center"><span className=" text-[#F97316]">Telugu</span>Ruchulu</Link></h2>
                </div>
                <form onSubmit={signUp} noValidate>
                    <InputField label="username" name="username" value={username} onChangeHandler={usernameChangeHandler} placeholder="Enter username" type="text" errorMsg={username_error}/>
                    <InputField label="email" name="email" value={email} onChangeHandler={emailChangeHandler} placeholder="Enter email" type="email" errorMsg={email_error}/>
                    <InputField label="password" name="password" value={password} onChangeHandler={passwordChangeHandler} placeholder="Enter password" type="password" errorMsg={password_error}/>
                    
                    <div className=" flex justify-center items-center">
                        <button type="submit" className=" border px-5 py-1 text-center  bg-[#F97316] rounded-md">SignUp</button>
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

export interface ErrorMSGProps{
    username_error:string,
    password_error:string,
    email_error:string
}