import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import { Button } from "../components/Button"
import { BottomWarning } from "../components/BottomWarning"

export function SignUp(){
    return <div className = "min-h-screen bg-slate-300 flex justify-center">
        <div className="flex flex-col justify-center">
        <div className="bg-white rounded-lg w-80 p-2 h-max px-4" >
        <Heading label={"SignUp"} />
        <SubHeading label={"Enter your information to create an account"} />
        <InputBox label="First Name" placeholder={"John"} />
        <InputBox label="Last Name" placeholder={"Doe"} />
        <InputBox label="Email" placeholder={"johndoe@example.com"} />
        <InputBox label="Password" />
        <Button label="Sign Up" />
        <BottomWarning warning={"Already have an  acccount? "} link="Login" />
        </div>
        </div>
    </div>
}