import React from "react";
import "./Userlist.css";

function Userlist({ users }) {
    if (users.length === 0) {
        return <p>Loading users...</p>;
    }

    return (
        <div className="card-container">
            {users.map((user)=>(
                <div className="card" key={user.id}>
                    <h3>{user.name}</h3>
                    <p>{user.email}</p>
                    <span className="role">{user.role}</span>
                </div>
            ))}
        </div>
    );
}

export default Userlist;