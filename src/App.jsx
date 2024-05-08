import React from "react";
import Dice from "./Dice";

const App = () => {
    const prova = [1, 2, 3, 4, 5];
    return (
        <>
            <Dice dice={prova} />
        </>
    );
};

export default App;