import { MouseEventHandler } from "react"

interface ButtonProps {
    text: string,
    func: MouseEventHandler<HTMLButtonElement>
}

function Button ({text, func}: ButtonProps) {

    return (
        <button onClick={func}>
            {text}
        </button>
    )
}

export default Button