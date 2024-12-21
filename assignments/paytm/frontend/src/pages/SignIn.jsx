import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import { Button } from "../components/Button"
import { BottomWarning } from "../components/BottomWarning"

export function SignIn(){
    return <div className = "min-h-screen bg-slate-300 flex justify-center">
        <div className="flex flex-col justify-center">
        <div className="bg-white rounded-lg w-80 p-2 h-max px-4" >
        <Heading label={"SignIn"} />
        <SubHeading label={"Enter your credentials to access your account"} />
        <InputBox label="Email" placeholder={"johndoe@example.com"} />
        <InputBox label="Password" />
        <Button label="Sign In" dest="../Dashboard" />
        <BottomWarning warning={"Don't have an  acccount? "} link="Signup" />
        </div>
        </div>
    </div>
}