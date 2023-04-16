import { Card } from "./context";
import bank from "./bank.png"

export function Home(){
    return (
        <Card
            bgcolor="primary"
            txtcolor="black"
            header="Front End Bank Landing Page"
            title="Welcome to the bank"
            text="You can use this bank"
            src={bank}
        />
    );
}