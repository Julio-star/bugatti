import React, {useState} from "react";
import './user-list.css';

const UserList = () => {
    const users = [];
    const [isReady, setIsReady] = useState(false);

    async function _ShowUsersList(){
        await fetch("http://localhost:3001/api/auth/", {
          method: "GET",
    
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((data) => { 
            users.push(data)
           });
    
        setIsReady(true);
      }
    return (
        <div className="rectangle">
            <h1>Liste des utilisateurs</h1><br/>
            {isReady === true ? users.map((value, index) => <p>{value}</p>) : _ShowUsersList()}
        </div>
    );
};

export default UserList;