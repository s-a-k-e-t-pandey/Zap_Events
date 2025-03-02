'use client'
import { DarkButton } from "@/componets/buttons/DarkButton"
import { useState, useEffect } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";
import Sidebar from "@/componets/Sidebar";
import { sidebarContent } from '../../data';


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

export default function(){
    const {loading, zaps} = useZaps();
    return <div>
        <Sidebar content={sidebarContent}/>
        <main>
            <div className="flex justify-center pt-8">
                <div className="max-w-screen-lg w-full">
                    <div className="flex justify-between pr-10">
                        <div className="font-bold text-2xl">
                            My Zaps    
                        </div> 
                        <DarkButton onClick={()=>{}}>Create</DarkButton>
                    </div>
                </div>
            </div>
            {loading ? "Loading...": <ZapTable zaps={zaps}/>}
        </main>
    </div>
}


function ZapTable({zaps}: {zaps: Zap[]}){


    return (
        <div></div>
    )
}