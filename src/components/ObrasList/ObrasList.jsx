import React from "react";
import './style.css';
import Button from "../Button/Button";

export default function ObrasList({ users }) {
  return (

    <div className='producto__content'>
            {users.map((user) => (
                <div className='producto__content-img' key={user.id}>
                    <img src={user.img} alt={user.title} />
                    <div className='producto__content-title'>
                        <h1>{user.title}</h1>
                        <p>{user.description}</p>
                    </div>
                    <Button>{user.button}</Button>
                       
                </div>
            ))}
        </div>
  );
}