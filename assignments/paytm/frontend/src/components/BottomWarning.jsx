export function BottomWarning({warning, link }){
    return <div className="text-center p-2">
        {warning} 
        <a href={link} className="underline">{link}</a>
    </div>
}