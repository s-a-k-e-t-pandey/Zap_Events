'use client'
import { DarkButton } from "@/componets/buttons/DarkButton"
import { useState, useEffect } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { IoReorderThreeSharp } from "react-icons/io5";
import {Sidebar} from "../../componets/Sidebar"
import { useRouter } from "next/navigation";
import { LinkButton } from "@/componets/buttons/LinkButton";
import { IoIosArrowForward } from "react-icons/io";


interface Zap {
    "id": string,
    "trigerId" : string,
    "userId": string,
    "actions": {
        "id": string,
        "zapId": string,
        "actionId": string,
        "sortingOrder": number,
        "type": {
            "id": string,
            "name": string
        }
    }[],
    "trigger":{
        "id": string,
        "zapId": string,
        "triggerId": string,
        "type": {
            "id": string,
            "name": string
        }
    }
}


function useZaps(){
    const [loading, setLoading] = useState(true);
    const [zaps, setZaps] = useState([]);
    const router = useRouter();

    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/zap`, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        })
        .then(res =>{
            setZaps(res.data.zaps);
            setLoading(false);
        })
    }, [])

    return {
        loading, zaps
    }
}

export default function Dashboard() {
    const {loading, zaps} = useZaps();
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
    const router = useRouter();

    const toggleSidebar = () => {
        setSidebarOpen(prev => !prev);
    };

    return (
        <div className="flex">
            <div className="">
                {!sidebarOpen && <button 
                    className="text-2xl rounded border m-1 mb-48 bg-amber-700 "
                    onClick={toggleSidebar}
                >
                    <IoReorderThreeSharp />
                </button>}
            </div>
            <div className={`transition-all duration-300 ${sidebarOpen ? "w-64" : "w-0"} overflow-hidden`}>
                {sidebarOpen && <Sidebar onClose={() => setSidebarOpen(false)} />}
            </div>

            <main className={`flex-1 p-4 transition-all duration-300 `}>
                <div className="flex p-1">

                    <div className="flex-1 max-w-full">
                        <div className="flex justify-between items-center mb-4">
                            <div className="font-bold text-2xl">My Zaps</div>
                            <DarkButton onClick={() => {router.push("/zap/create")}}>Create</DarkButton>
                        </div>
                        {loading ? "Loading..." : <ZapTable zaps={zaps} />}
                    </div>
                </div>
            </main>
        </div>
    );
}


function ZapTable({zaps}: {zaps: Zap[]}){
    const router = useRouter();
    return (
    <div className="relative overflow-x-auto ">
        <table className="w-full text-sm text-left rtl:text-right divide-y-4 divide-y-reverse divide-gray-200">
            <thead className="text-xs uppercase ">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Last edit
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Running
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Go
                    </th>
                </tr>
            </thead>
            <tbody>
                {zaps.map(z => <tr className="bg-white border-b border-t py-4 border-gray-200 border-w-4">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        {z.trigger.type.name} {z.actions.map(x => x.type.name)}
                    </th>
                    <td className="px-6 py-4">
                        key={z.id}
                    </td>
                    <td className="px-6 py-4">
                        Nov 13, 2025
                    </td>
                    <td className="px-6 py-4">
                        <LinkButton onClick={()=>{
                            router.push("/zap"+z.id)
                            }}><IoIosArrowForward />
                        </LinkButton>
                    </td>
                </tr>)}
            </tbody>
        </table>
    </div>

    );
}