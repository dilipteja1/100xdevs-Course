import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import { Button } from "../components/Button"
import { BottomWarning } from "../components/BottomWarning"
import { useState } from "react"

export function SignUp(){
    const [firstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return <div className = "min-h-screen bg-slate-300 flex justify-center">
        <div className="flex flex-col justify-center">
        <div className="bg-white rounded-lg w-80 p-2 h-max px-4" >
        <Heading label={"SignUp"} />
        <SubHeading label={"Enter your information to create an account"} />
        <InputBox label="First Name" placeholder={"John"} firstname={firstname} />
        <InputBox label="Last Name" placeholder={"Doe"} lastname={lastname} />
        <InputBox label="Email" placeholder={"johndoe@example.com"} email={email} />
        <InputBox label="Password" password = {password} />
        <Button label="Sign Up" dest="../Dashboard" />
        <BottomWarning warning={"Already have an  acccount? "} link="Signin" />
        </div>
        </div>
    </div>
}