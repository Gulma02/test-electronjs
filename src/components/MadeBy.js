import React from "react";

export default function MadeBy(props) {
    const {userInfo} = props;

    return (
        <div>
            <p>Made by {userInfo.nombre}</p>
        </div>
    );
}