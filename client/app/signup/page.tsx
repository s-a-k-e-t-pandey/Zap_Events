'use client'
import { CheckFeature } from "@/componets/CheckFeature"
import { Appbar } from "@/componets/Appbar"
import { Input } from "@/componets/Input"
import { PrimaryButton } from "@/componets/buttons/PrimaryButton"
import { useState } from "react"
import { BACKEND_URL } from "../config"
import axios from "axios"
import { useRouter } from "next/navigation"

export default function(){
    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return <div>
            <div className="flex justify-center">
                <div className="flex pt-8 max-w-4xl">
                    <div className="flex-1 pt-20 px-4">
                        <div className="pb-4 font-semibold text-3xl">
                            Join millions worldwide who automate their work using Zapier.
                        </div>
                        <div className="pt-4 pb-6">
                            <CheckFeature label={"Easy setup, no coding required"}></CheckFeature>
                        </div>
                        <div className="pb-6">
                            <CheckFeature label={"Free forever for core features"}></CheckFeature>
                        </div>
                        <CheckFeature label={"14-day trial of premium features & apps"}></CheckFeature>
                    </div>
                    <div className="flex-1 pt-6 pb-6 mt-12 px-4 rounded border">
                        <Input type="text" placeholder="John Doe" label="Name" onChange={e => {
                            setName(e.target.value)
                        }}></Input>
                        <Input type="text" placeholder="example@gmail.com" label="Username" onChange={e => {
                            setEmail(e.target.value)
                        }}></Input>
                        <Input type="text" placeholder="abc123" label="Password" onChange={e => {
                            setPassword(e.target.value)
                        }}></Input>
                        <div className="pt-4 flex justify-center">
                            <PrimaryButton onClick={async ()=>{   
                                const res = await axios.post(`${BACKEND_URL}/api/v1/user/login`,{
                                    username: email,
                                    password,
                                    name
                                });
                                router.push("/login")
                            }} size="big">Get Started Free</PrimaryButton>
                        </div>
                    </div>
                </div>
            </div>
    </div>
}