import { GreenButton } from "../shared/ui/Buttons"

type LoginFormProps = {
    onSubmit: () => void
}

export default function LoginForm({ onSubmit }: LoginFormProps){


    const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        onSubmit()
    }

    return(
        <form onSubmit={(event) => formSubmitHandler(event)} className="login-form">
            <input className="form-input" placeholder="Email" type="text" />
            <input className="form-input" placeholder="Password" type="text" />
            <GreenButton>Sign in</GreenButton>
        </form>
    )
}