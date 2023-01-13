import {React} from "react";
import './content-box.css';

const ContentBox = (params) => {
    const pattern = 'images/';
    return (
        <div className="rectangle">
            <h1 className="header">{params.title}</h1><br/>
            <p className="sideBar">{params.text}</p>
            <img className="content-image" src={pattern+params.path} alt=''/>
        </div>
    );
};

export default ContentBox;