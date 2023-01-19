import {React} from "react";
import './vertical-line.css';

const VerticalLine = (params) => {
    return (
       <div className="container">
            <div className="vl"/>
            <div className="circle"/>
            <p >{params.date}</p>
            <div className="vl"/>
       </div>
    );
};

export default VerticalLine;