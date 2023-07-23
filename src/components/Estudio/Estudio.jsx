// eslint-disable-next-line no-unused-vars
import React from 'react';
import './style.css';

function Estudio() {
  return (
    <div className='container estudio'>
      <div className='estudio__content'>
            <div className='estudio__content-title'>
                  <h1>Estudio</h1>
            </div>
            <div className='estudio__content-subtitles'>
                  <p>Filosofía e identidad...</p>
            </div>
            <div className='estudio__content-paragraph'>
                  <p>Nuestro estudio posee una larga experiencia en diseño, asesoramiento y desarrollo de proyectos de iluminación para arquitectura y paisajismo. Combinamos todos los aspectos luminotécnicos de la obra para generar el mayor énfasis de las ideas rectoras. Trabajamos con un grupo interdisciplinario para proyectos de ingeniería eléctrica, sistemas de control de iluminación y maquinaria escénica.</p>
            </div>          
      </div>
      <div className='estudio__content-staff'>
                  <div className='estudio__content-subtitles'>
                      <p>Nuestro Staff</p>
                  </div>
                  <div className='estudio__content-staff-card german'>
                      <img src="https://i.imgur.com/J9HY5Hk.jpg" alt="German Riesco | Arquitecto" />
                      <div className='estudio__content-staff-card-detail'>
                            <div className='estudio__content-staff-card-detail detail'>
                                  <h2>Germán Riesco</h2>
                                  <h4>Arquitecto</h4>
                                  <p>Arquitecto UBA - 1993</p>
                                  <p>Egresado del Colegio Nacional de Buenos Aires - 1986</p>
                                  <p>Cursos Iguzzini Ancona, Italia - 2008</p>
                                  <p>Dictado de curso de introducción a la iluminación Universidad de Paleromo - 2007</p>
                                  <p>Lighting Designer - 1999</p>
                                  <p>LAC - Phillips - Osram - 1998-99</p>
                            </div>
                      </div>
                  </div>
                  <div className='estudio__content-staff-card'>
                      <img src="https://i.imgur.com/fyezM5C.jpg" alt="Marina Navarro | Arquitecto" className='imagen-estudio' />
                      <div className='estudio__content-staff-card-detail'>
                            <div className='estudio__content-staff-card-detail'>
                                  <h2>Marina Navarro</h2>
                                  <h4>Arquitecta</h4>
                                  <p>Arquitecto UBA - 2020</p>
                                  <p>Docente ayudante - Catedra Diseño UBA</p>
                                  <p>Curso Iluminación aplicada a la arquitectura - FADU UBA</p>
                            </div>
                      </div>
                  </div>
                  <div className='estudio__content-staff-card'>
                      <img src="https://i.imgur.com/xuNjvyG.jpg" alt="Aylu jsjsjs | Arquitecto"  className='imagen-estudio'/>
                      <div className='estudio__content-staff-card-detail'>
                            <div className='estudio__content-staff-card-detail'>
                                  <h2>María Aylén Ricciardelli</h2>
                                  <h4>Arquitecta</h4>
                                  <p>Arquitecta UBA - 2021</p>
                                  <p>Docente ayudante - Catedra Diseño UBA</p>
                            </div>
                      </div>
                  </div>
                  <div className='estudio__content-staff-card'>
                      <img src="https://i.imgur.com/QWeUvZK.jpg" alt="Marina Navarro | Arquitecto" className='imagen-estudio' />
                      <div className='estudio__content-staff-card-detail'>
                            <div className='estudio__content-staff-card-detail'>
                                  <h2>Catalina Riesco</h2>
                                  <h4>Estudiante</h4>
                                  <p>Arquitectura UBA </p>
                            </div>
                      </div>
                  </div>
            </div>
    </div>
  )
}

export default Estudio;