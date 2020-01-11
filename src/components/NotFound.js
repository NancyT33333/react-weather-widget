import React from "react";
import './NotFound.css';
import { tsPropertySignature } from "@babel/types";


function NotFound (props) {
    return (
        <div className="notFound">
            <p>Город не найден</p>
            <span className="delSpan" onClick={props.onClose}>X</span>
        </div>)
}

export default NotFound 