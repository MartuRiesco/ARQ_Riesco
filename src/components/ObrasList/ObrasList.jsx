/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import '../ObrasDestacadas/style.css';
import { Link } from "react-router-dom";
import './style.css'
import  Button  from "../Button/Button";

export default function ObrasList({ users }) {
        const years = [
                2023, 2022, 2021, 2020, 2019, 2018,
                2017, 2016, 2015, 2014, 2013, 2012,
                2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000,
              ];
              
              const links = years.map((year) => {
                return (
                  <Link to={`/obras/${year}`} key={year}>
                    <Button label={true} year={year} />
                  </Link>
                );
              });
              
  return (
        <div className='container_obras_destacadas'>
            <div className='obras__destacadas-title'>
                    <h1>Obras & Proyectos</h1>
            </div>
            <div className="linea-de-tiempo">
                {links}
            </div>
                    <div className='obras__destacadas-content'>
                        {users.map((user) => (
                            <div className='obras__destacadas-content-img' key={user.id}>
                                <Link to={`/obra/${user.category}`}>
                                    <div className="cover">
                                        {user.title}
                                    </div>
                                        <img src={user.img1} alt={user.title} />
                                </Link>
                            </div>
                        ))}
                    </div>
        </div>
  );
}