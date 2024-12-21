import { useNavigate } from "react-router-dom"

export function Button({label, dest}){
    const navigate = useNavigate()
    return <>
        <button className="w-full bg-black text-white font-bold  my-3 py-2 px-4 rounded " onClick={()=> {navigate(dest)}}>{label}</button>
        <br />
    </>
}