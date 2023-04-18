import React, { useState, useEffect } from "react";

export const useBalance = (isDeposit) => {
  // let deposit = 0; // state of this transaction
  const [deposit, setDeposit] = useState("");
  const [withdraw, setWithdraw] = useState("");
  const [balance, setBalance] = useState(0);
  const [show, setShow] = useState(true);
  const [isDepositDisabled, setIsDepositDisabled] = useState(Boolean);
  const [isWithdrawDisabled, setIsWithdrawDisabled] = useState(Boolean);

  useEffect(() => {
    if (deposit.length === 0) {
      setIsDepositDisabled(true);
    } else {
      setIsDepositDisabled(false);
    }
  }, [deposit]);

  useEffect(() => {
    if (withdraw.length === 0) {
      setIsWithdrawDisabled(true);
    } else {
      setIsWithdrawDisabled(false);
    }
  }, [withdraw]);

  const handleSubmit = (event) => {
    if (isDeposit) {
      if (isNaN(deposit)) {
        return window.alert("Please enter a valid number");
      }
      if (deposit < 0) {
        return window.alert("Please enter a positive number");
      }
      const depositTotal = +balance + +deposit;
      setBalance(depositTotal);

      localStorage.setItem("balance", JSON.stringify(depositTotal));
      localStorage.setItem("action", "DEPOSITED");
      localStorage.setItem("amount", deposit);
    } else {
      if (isNaN(withdraw)) {
        return window.alert("Please enter a valid number");
      }
      if (withdraw < 0) {
        return window.alert("Please enter a positive number");
      }
      if (balance - withdraw < 0) {
        return window.alert("Insufficient funds");
      }
      const withdrawTotal = +balance - +withdraw;
      setBalance(withdrawTotal);
      localStorage.setItem("balance", withdrawTotal);
      localStorage.setItem("action", "WITHDREW");
      localStorage.setItem("amount", withdraw);
    }
    // added +in front of value to turn to integer
    setShow(false);
    event.preventDefault();
  };
  function clearForm() {
    setDeposit("");
    setWithdraw("");
    setShow(true);
  }

  return {
    balance,
    handleSubmit,
    deposit,
    setDeposit,
    setWithdraw,
    setBalance,
    show,
    clearForm,
    isDepositDisabled,
    isWithdrawDisabled,
  };
};
