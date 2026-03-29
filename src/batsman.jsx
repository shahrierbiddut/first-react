import { useState } from "react";

export default function Batsman() {
    const [Runs, _setRuns] = useState(0);

    const [sixes,setSixes] = useState(0);

    const handleSingles=()=>{
        const udatedRuns = Runs + 1;
        _setRuns(udatedRuns);
    }
    const handleDoubles=()=>{
        const udatedRuns = Runs + 2;
        _setRuns(udatedRuns);
    }
    const handleTriples=()=>{
        const udatedRuns = Runs + 3;
        _setRuns(udatedRuns);
    }
    const handleFours=()=>{
        const udatedRuns = Runs + 4;
        _setRuns(udatedRuns);
    }
    const handleSixes=()=>{
        const udatedRuns = Runs + 6;
        const updatedSixes = sixes + 1;
        setSixes(updatedSixes);
        _setRuns(udatedRuns);
    }
    return (
        <div>
            <h3>Player: Bangla Batsman</h3>
            <p>Sixes: {sixes}</p>
            <h1>Score: {Runs}</h1>
            <button onClick={handleSingles}>singles</button>
            <button onClick={handleDoubles}>doubles</button>
            <button onClick={handleTriples}>triples</button>
            <button onClick={handleFours}>fours</button>
            <button onClick={handleSixes}>sixes</button>
        </div>
    );
}