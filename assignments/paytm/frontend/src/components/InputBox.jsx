
export function InputBox({label, placeholder}){
    return <div className="p-2">
        <label className="text-sm font-medium text-left p-2 ">{label}</label><br />
        <input className="w-full p-2 border rounded border-slate-200" placeholder={placeholder} />
        <br />
    </div>
}