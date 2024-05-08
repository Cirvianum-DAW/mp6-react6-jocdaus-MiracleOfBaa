import React from "react";
import Dau from "./Dau";
import "./Dice.css";



const Dice = ({ dice }) => {
    return (
        <div className="Dice">
            {dice.map((v,i) => (
                <Dau key={i} value={v} />
            ))}
        </div>
    );
};

export default Dice;