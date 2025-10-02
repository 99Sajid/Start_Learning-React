import { useState } from "react";

export default function Batsman(){
    let [runs,setRuns]=useState(0);

    const handleSingle=()=>{
        const updatedRuns=runs+1;
        setRuns(updatedRuns);
    }
    const handleSix=()=>{
        const updatedRuns=runs+6;
        setRuns(updatedRuns);
    }
    const handleFour=()=>{
        const updatedRuns=runs+4;
        setRuns(updatedRuns);
    }
    const clikedStyle={
    border:'2px solid black'
  }
    return(
        <div>
        <h3>Player: Bangla Batsman</h3>
        <h1>Score:{runs} </h1>
        <button style={clikedStyle} onClick={handleSingle}>Singles</button>
        <button style={clikedStyle} onClick={handleFour}>Four</button>
        <button style={clikedStyle} onClick={handleSix}>Six</button>
        </div>
    )
}