import { FaCheckCircle } from "react-icons/fa";


export const CheckFeature = ({label}: {label:string}) =>{

    return <div className="flex">
        <div className="text-green-500 pt-0.5 text-md m-1"><FaCheckCircle /></div>
        <div className="pl-2 pt-0.5">
            {label}
        </div>
    </div>
}