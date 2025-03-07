import { div } from "framer-motion/client"



export const ZapCell = ({name, index}: {name?: string, index: number}) =>{

    return (
        <div className="border border-black pt-4 pl-4 flex">
            <div className="font-bold">
                {index}
            </div>
            <div>
                {name}
            </div>
        </div>
    )
}