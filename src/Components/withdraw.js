import React, {useEffect} from 'react';
import { useBalance } from "./balance";
import { Card } from './context';


export function Withdraw(){

    const {balance, handleSubmit, withdraw, setWithdraw, setBalance, show, clearForm, isWithdrawDisabled} = useBalance(false)
    useEffect(() => {
        setBalance(localStorage.getItem('balance'))
    },)

    return (
        <Card
        bgcolor="primary"
        header= {`Account Balance : ${balance}`}
        body={ show ? (
            <>
        Withdraw Amount:<br/>
        <input type="input" className="form-control" id="withdraw" placeholder="Enter withdraw" value={withdraw} onChange={e => setWithdraw(e.currentTarget.value)}/><br/>
        <button type="submit" className="btn btn-light" disabled={isWithdrawDisabled}  onClick={handleSubmit}>Withdraw</button>
        </>) :(
        <>
            <h5>Successful Withdraw</h5>
            <button type="submit" className="btn btn-light" onClick={clearForm}>Add another withdraw</button>
        </>
    )}
        /> 
        ) 
}