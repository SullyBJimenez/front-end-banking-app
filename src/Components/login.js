import React from 'react';
import { UserContext } from '.';

export function Login(){
    const ctx = React.useContext(UserContext);
    return (
        <h1>Login<br/>
            {JSON.stringify(ctx)}
        </h1>
    )
}