/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import './style.css';
import Button from "../Button/Button";

export default function ObrasList({ users }) {
  return (

    <div className='obras__content'>
            {users.map((user) => (
                <div className='obras__content-img' key={user.id}>
                    <img src={user.img} alt={user.title} />
                    <div className='obras__content-title'>
                        <h1>{user.title}</h1>
                        <Button props={'Ver proyecto'}/>
                    </div>
                       
                </div>
            ))}
        </div>
  );
}