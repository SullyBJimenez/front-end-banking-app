import React from 'react';
import { UserContext } from '.';

export function Balance(){
    const [balance, setBalance] = React.useState(0);
    const ctx = React.useContext(UserContext);
    return (
        <h1>Your current balance is:<br/>
            {JSON.stringify(balance)}
        </h1>
    )
}