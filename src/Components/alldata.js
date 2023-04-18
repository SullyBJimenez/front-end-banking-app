import React from 'react';
import { Card } from './context';



export function AllData(){
    const action = localStorage.getItem("action");
    const amount = localStorage.getItem("amount");
    const page = [`User ${action}: $${amount}`]


    return (
        <Card
        bgcolor="primary"
        header= "All Data"
        body={page}
            
    />
    )
}