'use client'
import { FcGoogle } from "react-icons/fc";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { useState } from "react";
import Link from "next/link";
import { AddUserf } from "../utils/crud";
import { toast } from "react-toastify";
const signup = () => {
    const [show, setShow] = useState(false)
    const handlegoogle = ()=>{ 
        toast.error("Can't Login With Google")
    }
    return (
        <div className="background w-full h-full">
            <form action={AddUserf}>
            <div className="mx-auto border border-gray-200 w-[370px] h-[650px] sm:w-[400px] sm:h-[650px] px-6 mt-[1rem] rounded-lg bg-transparent mb-[3rem] ">
                <div className=" mt-[2rem] ">
                    <h2 className="text-center text-white font-bold text-2xl">Sign Up</h2>
                </div>
                <div>
                    <h2 className="font-bold text-3xl text-center text-white mt-[2rem] mb-[1rem] ">Hello User !</h2>
                </div>
                <div className="mb-2">
                    <label htmlFor="" className="text-white font-bold text-[18px]">Name</label><br />
                    <input type="text" placeholder="Enter User Name" name="username" className="w-full px-4 py-2" required />
                </div>
                <div className="mb-2">
                    <label htmlFor="" className="text-white font-bold text-[18px]">Email</label><br />
                    <input type="email" name="email" placeholder="www.example123@gmail.com" className="w-full px-4 py-2" required />
                </div>
                <div className="mb-2">
                    <label htmlFor="" className="text-white font-bold text-[18px]">Phone</label><br />
                    <input type="phone" name="phone" placeholder="9876543210" className="w-full px-4 py-2" required />
                </div>
                <div className="mb-6 relative">
                    <label htmlFor=""className="text-white font-bold text-[18px]" >Password</label><br />
                    <input  type={show? 'text' : 'password' } name="password" placeholder="Password" className="w-full px-4 py-2 " required />
                    {
                        show? 
                        <LuEyeOff onClick={()=>setShow(!show)} className="absolute top-8 right-2 text-black w-7 h-7  cursor-pointer" />
                        :
                        <LuEye onClick={()=>setShow(!show)} className="absolute top-8 right-2 text-black w-7 h-7  cursor-pointer" />
                    }
                </div>
                <div className="mb-2">
                    <button className="w-full text-center py-2 border border-white rounded-md bg-black text-white font-bold  ">Sign Up</button>
                </div>
                <div className="flex items-center justify-center w-full mb-2 mt-2 ">
                    <div className="border border-white w-[37%] mr-1 "> </div>
                    <div className="">
                    <h5 className="w-fit text-center text-white text-[12px] bg-transparent ">or sign up with</h5>
                    </div>
                    <div className="border border-white w-[37%] ml-1"> </div>
                </div>
                <div className="relative mt-2">
                    <button onClick={handlegoogle} className="w-full py-2  border border-white rounded-md bg-white text-black font-bold text-[16px] tracking-tighter ">Continue With Google</button>
                    <FcGoogle className=" w-4 h-4 absolute top-3 left-[65px] cursor-pointer " />
                </div>
                <div className="mt-4">
                    <h3 className="text-white font-bold text-[16px] text-center ">Already have account <Link href={'/login'}><span className="text-purple-700 cursor-pointer hover:underline decoration-[2px] "> Login?</span></Link> </h3>
                </div>
            </div>
            </form>
        </div>
    )
}

export default signup
