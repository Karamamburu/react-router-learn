import { useState } from "react";
import Button from "../Button";
import Paragraph from "../Paragraph";

export default function ButtonsPage () {

    const [count, setCount] = useState(0)

    const increase = (): void => {
        setCount(count => count + 1)
    }

    const decrease = (): void => {
        setCount(count => count - 1)
    }

    const setCountToZero = (): void => {
        setCount(0)
    }

    return (
        <div>
            {count >= 0 ? (
                <div>
                    <Button text="increase" func={increase} />
                    <Paragraph text={`Count: ${count}`} />
                    <Button text="decrease" func={decrease} />
                </div>
            ) : (
                <div>
                    <Button text="increase" func={increase} />
                    <Paragraph text={`Count: ${count}`} />
                    <Button text="decrease" func={decrease} />
                    <Button text="!!!!!" func={setCountToZero} /> 
                </div>
            )
        }
        </div>
    )
}