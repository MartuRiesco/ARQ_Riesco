/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import '../ObrasDestacadas/style.css';
import { Link } from "react-router-dom";
import './style.css'
import  Button  from "../Button/Button";

export default function ObrasList({ users }) {
  return (
        <div className='container_obras_destacadas'>
            <div className='obras__destacadas-title'>
                    <h1>Obras & Proyectos</h1>
            </div>
            <div className="linea-de-tiempo">
            <Link to='/obras/2023' > 
             <Button label={true } year={'2023'}>
             </Button>
            </Link>
            <Link to='/obras/2022' >
             <Button  label={true } year={'2022'}>
                </Button>
        </Link>
        <Link to='/obras/2021' >
             <Button  label={true } year={'2021'}>
                </Button>
        </Link>
        <Link to='/obras/2020' >
             <Button  label={true } year={'2020'}>
                </Button>
        </Link>
        <Link to='/obras/2019' >
             <Button  label={true } year={'2019'}>
                </Button>
        </Link>
        <Link to='/obras/2018' >
             <Button  label={true } year={'2018'}>
                </Button>
        </Link>
        <Link to='/obras/2017' >
             <Button  label={true } year={'2017'}>
                </Button>
        </Link>
        <Link to='/obras/2016' >
             <Button  label={true } year={'2016'}>
                </Button>
        </Link>
        <Link to='/obras/2015' >
             <Button  label={true } year={'2015'}>
                </Button>
        </Link>
        <Link to='/obras/2014' >
             <Button  label={true } year={'2014'}>
                </Button>
        </Link>
        <Link to='/obras/2013' >
             <Button  label={true } year={'2013'}>
                </Button>
        </Link>
        <Link to='/obras/2012' >
             <Button  label={true } year={'2012'}>
                </Button>
        </Link>

        <Link to='/obras/2011' >
             <Button  label={true } year={'2011'}>
                </Button>
        </Link>
        <Link to='/obras/2010' >
             <Button  label={true } year={'2010'}>
                </Button>
        </Link>
        <Link to='/obras/2008' >
             <Button  label={true } year={'2009'}>
                </Button>
        </Link>
        <Link to='/obras/2008' >
             <Button  label={true } year={'2008'}>
                </Button>
        </Link>
        <Link to='/obras/2007' >
             <Button  label={true } year={'2007'}>
                </Button>
        </Link>
        <Link to='/obras/2006' >
             <Button  label={true } year={'2006'}>
                </Button>
        </Link>
        <Link to='/obras/2005' >
             <Button  label={true } year={'2005'}>
                </Button>
        </Link>
        <Link to='/obras/2004' >
             <Button  label={true } year={'2004'}>
                </Button>
        </Link>

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