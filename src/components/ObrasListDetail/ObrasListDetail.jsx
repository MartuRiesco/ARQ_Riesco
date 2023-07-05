import "./style.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSingleItemFromDatabase } from "../../services/firebase";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation,Pagination } from 'swiper/modules';

function ObrasListDetail() {
  const [Users, setUser] = useState([]);
  const params = useParams();
  const idCategory = params.idCategory;
  async function leerDatos() {
    let respuesta = await getSingleItemFromDatabase(idCategory);
    setUser(respuesta);
  
  }
  useEffect(() => {
    leerDatos();
  }, []);

  return (
  <div className='detail container'>
    {Users.map((user)=>(
  
  <div className='detail__content'>
          <div className='detail__content-img' key={user.id}>
              <div className='detail__content-title'>
                  <h1>{user.title}</h1>
              </div>
              <div className="swiper-detail"> <Swiper
     slidesPerView={'3'}
     centeredSlides={true}
     spaceBetween={500}
     loop={true}
     pagination={{
       clickable: true,
     }}
     navigation={true}
        
       
        modules={[Navigation,Pagination]}
        className="mySwiper"
      >
        <SwiperSlide> <img src={user.img1} alt={user.title} className="imagen_detail" /></SwiperSlide>
        <SwiperSlide> <img src={user.img2} alt={user.title} className="imagen_detail" /></SwiperSlide>
        <SwiperSlide> <img src={user.img3} alt={user.title} className="imagen_detail" /></SwiperSlide>
        <SwiperSlide> <img src={user.img4} alt={user.title} className="imagen_detail" /></SwiperSlide>
        <SwiperSlide> <img src={user.img5} alt={user.title} className="imagen_detail" /></SwiperSlide>
        <SwiperSlide> <img src={user.img6} alt={user.title} className="imagen_detail" /></SwiperSlide>
        <SwiperSlide> <img src={user.img1} alt={user.title} className="imagen_detail" /></SwiperSlide>
        <SwiperSlide> <img src={user.img2} alt={user.title} className="imagen_detail" /></SwiperSlide>
      </Swiper>
                 
              </div>
              <div className='detail__content-subtitle'>
                  <h4>Descripción</h4>
              </div>
              <div className='detail__content-parrafo'>
                  <p>{user.description}</p>  
              </div>       
          </div>
  </div>
    ))}
  </div>
  );
}

export default ObrasListDetail;