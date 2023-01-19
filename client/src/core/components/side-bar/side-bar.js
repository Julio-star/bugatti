import { Button } from "@mantine/core";
import { React, useState } from "react";
import './side-bar.css';

const SideBar = (params) => {
    let [number, setNumber] = useState(0);
    console.log(number);
    return (
        <div className="sideBar">
            <h2>{params.title}</h2><br />
            <ul>
                <li><Button onClick={() => setNumber(1)}>{params.firstParams}</Button></li>
                <li><Button onClick={() => setNumber(2)}>{params.secondParams}</Button></li>
                <li><Button onClick={() => setNumber(3)}>{params.thirdParams}</Button></li>
                <li><Button onClick={() => setNumber(4)}>{params.fourthParams}</Button></li>
                <li><Button onClick={() => setNumber(5)}>{params.fifthParams}</Button></li>
            </ul>
        </div>
    );
};

export default SideBar;