'use client'
import { useRouter } from "next/navigation"
import { LinkButton } from "./buttons/LinkButton"
import { PrimaryButton } from "./buttons/PrimaryButton"


export const Appbar = () =>{
    const router = useRouter();
    return (
        <div className="flex border-b justify-between p-4">
            <div className="flex justify-center text-2xl font-extrabold cursor-pointer" onClick={()=> {router.push("/")}}>
                Zapier
            </div>
            <div className="flex ">
                <div className="pr-4">
                    <LinkButton onClick={()=>{}}>Contact Sales</LinkButton>
                </div>
                <div className="pr-4">
                    <LinkButton onClick={()=>{router.push("/login")}}>Login</LinkButton>
                </div>
                <div className="pr-4">
                    <PrimaryButton onClick={()=> router.push("/signup")}>Signup</PrimaryButton>
                </div>
            </div>
        </div>
    )
}