import React from "react";
import "../css/scoreboard.css";

export default function Scoreboard(props) {
    const {puntos} = props;

    return (
        <div className="scoreboard">
            <div className="team">
                <div className="name">User</div>
                <div className="score">{puntos.puntosUsuario}</div>
            </div>
            <div className="team">
                <div className="name">CPU</div>
                <div className="score">{puntos.puntosCpu}</div>
            </div>
        </div>
    );
}