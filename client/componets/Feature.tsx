import { FaCheck } from "react-icons/fa6";


export const Feature = ({title, subtitle}: {title: string, subtitle: string}) =>{

    return (
        <div className="flex">
            <div className="pt-1"><FaCheck /></div>
            <div className="pl-1 font-bold">{title}</div>
            <div className="pl-1">{subtitle}</div>
        </div>
    )
}

