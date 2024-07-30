import React, { useState } from "react";
import InputField from "../../components/InputField";

export interface ContactFormProps{
    name:string,
    email:string,
    description:string
}

const ContactUs = () => {
    const [formData,setFormData] = useState<ContactFormProps>({
        name:'',
        email:'',
        description:''
    })
    const nameChangeHandler = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setFormData({...formData,name:e.target.value});
    }
    const emailChangeHandler = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setFormData({...formData,email:e.target.value});
    }
    const decriptionChangeHandler = (e:React.ChangeEvent<HTMLTextAreaElement>)=>{
        setFormData({...formData,description:e.target.value});
    }
    const {name, email, description} = formData;
    return (
        <div className=" flex items-center justify-center gap-10 h-[80vh] w-full">
           <img src="https://foodfire-app.netlify.app/contactUs.13c5d28a.png" className=" w-[300px]"/>
           <div className="w-[40%] ">
                <h3 className=" p-2 font-bold text-xl">Contact Us</h3>
                <form>
                    <InputField name="name" placeholder="Enter your name" type="text"  onChangeHandler={nameChangeHandler} value={name}/>
                    <InputField name="email" placeholder="Enter your email" type="email" onChangeHandler={emailChangeHandler} value={email}/>
                    <textarea placeholder="Enter your description" value={description} onChange={decriptionChangeHandler} className="ml-2 p-2 outline-none border focus:border-orange-200 w-full"/>
                    <button className=" border-slate-500 border p-2 ml-2 mt-4 rounded-md bg-[#F97316] font-bold">Submit</button>
                </form>
           </div>

        </div>
    );
};

export default ContactUs;