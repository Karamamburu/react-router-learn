import Button from "../Button";
import Header from "../Header";
import Paragraph from "../Paragraph";

export default function WelcomePage () {

    function log() {
        console.log('welcome click')
    }

    return (
        <div>
            <Header text="Welcome" />
            <Paragraph text="this is the welcome page" />
            <Button text="get welcome log" func={log} />
        </div>
    )
}
