'use client'
import { FcGoogle } from "react-icons/fc";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
const Login = () => {
    const [show, setShow] = useState(false)
    const handleLogin = ()=> toast.error("Sorry Can't Login Now")
    return (
        <div className="background w-full h-full">
            <div className="mx-auto border border-gray-200 w-[370px] h-[550px] sm:w-[400px] sm:h-[550px] px-6 mt-[1rem] rounded-lg bg-transparent mb-[3rem] ">
                <div className=" mt-[2rem] ">
                    <h2 className="text-center text-white font-bold text-2xl">Login</h2>
                </div>
                <div>
                    <h2 className="font-bold text-3xl text-center text-white mt-[3rem] mb-[2rem] ">Welcome Back !</h2>
                </div>
                <div className="mb-2">
                    <label htmlFor="" className="text-white font-bold text-[18px]">Email</label><br />
                    <input type="text" placeholder="www.example123@gmail.com" name="email" className="w-full px-4 py-2" />
                </div>
                <div className="mb-8 relative">
                    <label htmlFor=""className="text-white font-bold text-[18px]" >Password</label><br />
                    <input  type={show? 'text' : 'password' } placeholder="Password" name="password" className="w-full px-4 py-2 " />
                    {
                        show? 
                        <LuEyeOff onClick={()=>setShow(!show)} className="absolute top-8 right-2 text-black w-7 h-7  cursor-pointer" />
                        :
                        <LuEye onClick={()=>setShow(!show)} className="absolute top-8 right-2 text-black w-7 h-7  cursor-pointer" />
                    }
                </div>
                <div className="mb-2">
                    <button onClick={handleLogin} className="w-full text-center py-2 border border-white rounded-md bg-black text-white font-bold  ">Login</button>
                </div>
                <div className="flex items-center justify-center w-full mb-2 mt-2 ">
                    <div className="border border-white w-[37%] mr-1 "> </div>
                    <div className="">
                    <h5 className="w-fit text-center text-white text-[12px] bg-transparent ">or Login with</h5>
                    </div>
                    <div className="border border-white w-[37%] ml-1"> </div>
                </div>
                <div className="relative mt-2">
                    <button onClick={handleLogin} className="w-full py-2  border border-white rounded-md bg-white text-black font-bold text-[16px] tracking-tighter ">Continue With Google</button>
                    <FcGoogle className=" w-4 h-4 absolute top-3 left-[65px] cursor-pointer " />
                </div>
                <div className="mt-4">
                    <h3 className="text-white font-bold text-[16px] text-center ">Don&apos;t have account <Link href={'/signup'}><span className="text-purple-700 cursor-pointer hover:underline decoration-[2px] "> Signup?</span></Link> </h3>
                </div>
               
            </div>
        </div>
    )
}

export default Login
