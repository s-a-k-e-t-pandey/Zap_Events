'use client'
import { PrimaryButton } from "./buttons/PrimaryButton"
import { SecondaryButton } from "./buttons/SecondaryButton"
import { Feature } from "./Feature"
import { useRouter } from "next/navigation"


export const Hero = () =>{
    const router = useRouter();

    return ( <div>
        <div className="flex justify-center">
            <div className="text-center font-semibold text-4xl pt-24 max-w-xl">
                Zapier for Enterprise
            </div>
        </div>
        <div className="flex justify-center">
            <div className="text-center font-semibold text-7xl pt-4 max-w-6xl">
                Automation for every team, approved by IT
            </div>
        </div>
        <div className="flex justify-center">
            <div className="text-center font-normal text-2xl pt-8 max-w-4xl">
            Progress stalls when teams have to wait for technical help to automate workflows and connect apps. Zapier empowers everyone in your business to safely automate their work in minutes, not months—even if they don’t code.
            </div>
        </div>
        <div className="flex justify-center pt-4">
            <div className="flex">
                <PrimaryButton onClick={()=> {router.push("/signup")}} size={'big'}>Get Started Free</PrimaryButton>
                <div className="pl-4"></div>
                <SecondaryButton onClick={()=>{}} size={'big'}>Contact Sales</SecondaryButton>
            </div>
        </div>
        <div className="flex justify-center pt-4">
            <Feature title="Free Forever" subtitle="for core features"></Feature>
            <div className="pl-3">
                <Feature title="More Apps" subtitle="than other platform"></Feature>
            </div>
            <div className="pl-3">
                <Feature title="Cutting Edge" subtitle="Ai Features"></Feature>
            </div>
        </div>
    </div>
    )
}