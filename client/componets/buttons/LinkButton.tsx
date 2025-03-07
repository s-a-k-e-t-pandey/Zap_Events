'use client'
import { ReactNode } from "react"

export const LinkButton = ({children, onClick} : {children: ReactNode, onClick: ()=> void}) =>{
    return <div className="px-2 py-2 rounded cursor-pointer hover:bg-slate-100 font-extralight text-sm" onClick={onClick}>
        {children}
    </div>
}