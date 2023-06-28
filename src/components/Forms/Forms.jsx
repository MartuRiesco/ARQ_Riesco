import React from 'react'
import './style.css'
import {FiInstagram} from 'react-icons/fi'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'

function Forms() {
const {register, formState:{errors}, handleSubmit}= useForm();


const onSubmit = (data, event) => {
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }
    
    emailjs.sendForm('service_f5ztfi4', 'template_lpn435p', event.target, 'EegNYD0m-p-mjRRZN')
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
      Swal.fire({
        position: 'center',
        background:'black',
        color: 'white',
        icon: 'success',
        title: 'Mensaje Enviado!',
        showConfirmButton: false,
        timer: 1500, 
      })
  };
  return (
    <div className='formulario' >
        <form className='form' onSubmit={handleSubmit(onSubmit)}>
            <div className='form-seccion'>
                <label className='form-label'> Nombre</label>
                <input className='form-input' type="text"  placeholder='Juan Perez'{...register('nombre', {required:true})
            }/>
            {errors.nombre?.type === 'required' && <p>Este campo es obligatorio</p>}
            </div>
            <div className='form-seccion'>
                <label className='form-label'> Email</label>
                <input className='form-input' type="text" placeholder='juan@gmail.com'{...register('email',{
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                    required:true
                })} />
                 {errors.email?.type === 'required' && <p>Este campo es obligatorio</p>}
                {errors.email?.type === 'pattern' && <p>El formato del email es incorrecto</p>}
            </div>
            <div className='form-seccion'>
                <label className='form-label'>
                  Telefono
                </label>
                <input className='form-input' type="numbers"  placeholder='+5491145264587'{...register('telefono', {
                  required:true,
                  maxLength:15,
               
                })
            }/>
            {errors.telefono?.type === 'required' && <p>Este campo es obligatorio</p>}
            </div>
            <div className='form-seccion'>
                <label className='form-label'> Mensaje</label>
                <textarea className='form-input textarea' type="text"  placeholder='Dejame Tu Mensaje'{...register('mensaje', {required:true})}/>
            </div>
            {errors.mensaje?.type === 'required' && <p>Este campo es obligatorio</p>}
            <button className='form-button' type="submit" value='enviar' >ENVIAR</button>
        </form>
    </div>
  )
}

export default Forms