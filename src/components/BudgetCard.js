import { Card } from "react-bootstrap";
import { currencyFormater } from "../util";

export default function BudgetCard({name, amount, max}) {
    return (
        <Card>
            <Card.Body>
                <Card.Title>
                    <div>{name}</div>

                    <div>{currencyFormater.format(amount)} / {currencyFormater.format(max)}</div>
                </Card.Title>
            </Card.Body>
        </Card>
    )
}
