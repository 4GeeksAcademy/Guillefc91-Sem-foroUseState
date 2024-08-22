import React, { useState } from "react";

export const TrafficLight = () => {
    const [light, setLight] = useState("");
    const [stop,setStop] = useState("")

    return (
        <>

            <div className="soporte">""</div>
            <div className="trafficLight">
                <div onClick={() => setLight("glow-red")} className = {`light bg-danger ${light == "glow-red" ? "glow-red" : ""}`}></div>
                <div onClick={() => setLight("glow-yellow")} className = {`light bg-warning ${light == "glow-yellow" ? "glow-yellow" : ""}`}></div>
                <div onClick={() => setLight("glow-green")} className = {`light bg-success ${light == "glow-green" ? "glow-green" : ""}`}></div>
            </div>
        </>
    )

}