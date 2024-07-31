import { useState } from "react";

export const useCounter = (action) => {
    const [cash, setCash] = useState(0);

    const addAct = () => {
        setCash(cash + 1);
    };
    const minusAct = () => {
        setCash(cash - 1);
    }
    return [cash, addAct, minusAct];
}