import React, {useState} from "react";
import {FaHandRock, FaHandScissors, FaHandPaper} from "react-icons/fa";
import Scoreboard from "../components/Scordeboard";
import Result from "../components/Result";
import "../css/buttons.css";

export default function Game() {
    const [stateUsuario, setStateUsuario] = useState(0);
    const [stateCpu, setStateCpu] = useState(0);

    const ganoUsuario = () => {
        setStateUsuario(stateUsuario + 1);
    };

    const ganoCpu = () => {
        setStateCpu(stateCpu + 1);
    }

    const setUserPick = (userPick) => {
        let cpuPick = getCpuPick();
        let mixedPicks = getMixedPicks(userPick, cpuPick);

        let result = getResult(mixedPicks);

        switch (result) {
            case "User":
                ganoUsuario()
                break;
            case "Cpu":
                ganoCpu();
                break;
            case "Draw":
                console.log("Draw");
        }
    }

    const getCpuPick = () => {
        let numberCpuPick = Math.floor(Math.random() * (3 - 1 + 1) + 1);
        let translatedCpuPick = "";
        switch (numberCpuPick) {
            case 1:
                translatedCpuPick = "r"
                break;
            case 2:
                translatedCpuPick = "p"
                break;
            case 3:
                translatedCpuPick = "s"
                break;
        }

        return translatedCpuPick;
    }
    const getMixedPicks = (userPick, cpuPick) => {
        return userPick + cpuPick;
    }
    const getResult = (mixedPicks) => {
        let result = "";

        switch (mixedPicks) {
            case "rr":
            case "pp":
            case "ss":
                result = "Draw";
                break;
            case "rs":
            case "pr":
            case "sp":
                result = "User";
                break;
            case "sr":
            case "rp":
            case "ps":
                result = "Cpu";
                break;
        }

        return result;
    }

    const puntos = {
        puntosUsuario: stateUsuario,
        puntosCpu: stateCpu
    }

    return (
        <div>
            <Result></Result>
            <div>
                <Scoreboard puntos={puntos}></Scoreboard>
            </div>
            <button className="game-button" onClick={() => setUserPick("r")}>
                <FaHandRock></FaHandRock>
            </button>
            <button className="game-button" onClick={() => setUserPick("p")}>
                <FaHandPaper></FaHandPaper>
            </button>
            <button className="game-button" onClick={() => setUserPick("s")}>
                <FaHandScissors></FaHandScissors>
            </button>
        </div>
    );
}