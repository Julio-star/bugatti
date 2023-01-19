import { React } from "react";
import './table-box.css';

const TableBox = (params) => {

    return (
        <div className="rectangle">
            <table className="tableau">
                <caption><h1>{params.title}</h1></caption>
                <tbody>
                    <tr>
                        <th>{params.cat1}</th>
                        <th>{params.cat2}</th>
                        <th>{params.cat3}</th>
                    </tr>
                    <tr>
                        <td>{params.recordsAccelerationDate}</td>
                        <td>{params.recordsAcceleration}</td>
                        <td>{params.time}</td>
                    </tr>
                    <tr>
                        <td>{params.recordsVitesseDate}</td>
                        <td>{params.recordsVitesse}</td>
                        <td>{params.trackRecords}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default TableBox;