'use client'
import { useRouter } from "next/navigation"
import { LinkButton } from "./buttons/LinkButton"
import { PrimaryButton } from "./buttons/PrimaryButton"
import { useEffect, useState } from "react"


export const Appbar = () =>{
    const router = useRouter();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        setIsLoggedIn(!!token);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        setIsLoggedIn(false);
        router.push("/");
    };

    return (
        <div className="flex border-b justify-between p-4">
            <div className="flex justify-center text-2xl font-extrabold cursor-pointer" onClick={()=> {router.push("/")}}>
                Zapier
            </div>
            <div className="flex">
                <div className="pr-4">
                    <LinkButton onClick={()=>{}}>Contact Sales</LinkButton>
                </div>
                {!isLoggedIn ? (
                    <>
                        <div className="pr-4">
                            <LinkButton onClick={()=>{router.push("/login")}}>Login</LinkButton>
                        </div>
                        <div className="pr-4">
                            <PrimaryButton onClick={()=> router.push("/signup")}>Signup</PrimaryButton>
                        </div>
                    </>
                ) : (
                    <div className="pr-4">
                        <LinkButton onClick={handleLogout}>Logout</LinkButton>
                    </div>
                )}
            </div>
        </div>
    )
}