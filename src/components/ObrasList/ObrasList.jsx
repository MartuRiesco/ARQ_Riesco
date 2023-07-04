/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import '../ObrasDestacadas/style.css';
import { Link } from "react-router-dom";

export default function ObrasList({ users }) {
  return (
        <div className='container_obras_destacadas'>
            <div className='obras__destacadas-title'>
                    <h1>Obras & Proyectos</h1>
            </div>
                    <div className='obras__destacadas-content'>
                        {users.map((user) => (
                            <div className='obras__destacadas-content-img' key={user.id}>
                                <Link to={`/obras/${user.id}`}>
                                        <img src={user.img} alt={user.title} />
                                </Link>
                            </div>
                        ))}
                    </div>
        </div>
  );
}