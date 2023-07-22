/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import '../ObrasDestacadas/style.css';
import { Link } from "react-router-dom";
import './style.css'
import  Button  from "../Button/Button";

export default function ObrasList({ users }) {
        const years = [
                '2023-2020', '2019-2015', '2014-2010', '2009-2005', '2004-2000'
              ];
              
              const links = years.map((year) => {
                return (
                  <Link to={`/obras/${year}`} key={year}>
                      <div className="container__linea">
                          <div className="button-linea-de-tiempo">
                              <Button label={true} year={year} />
                          </div>
                      </div>
                    </Link>
                );
              });
              
  return (
        <div className='container_obras_destacadas'>
            <div className='obras__destacadas-title dest '>
                    <h1>Obras & Proyectos</h1>
            </div>
            <div className="linea-de-tiempo">
                {links}
            </div>
                    <div className='obras__destacadas-content'>
                        {users.map((user) => (
                            <div className='obras__destacadas-content-img' key={user.id}>
                                <div className="obras-hover">
                                    <Link to={`/obra/${user.category}`} className="obras-destacadas-cover">
                                        <h2>{user.title}</h2>
                                    </Link>
                                </div>
                                    <img src={user.img1} alt={user.title} />
                            </div>
                        ))}
                    </div>
        </div>
  );
}