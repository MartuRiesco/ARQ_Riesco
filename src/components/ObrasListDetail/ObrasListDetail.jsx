import "./style.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSingleItemFromDatabase } from "../../services/firebase";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

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
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, 
      
    },
  };
  
  return (
  <div className='detail-container'>
    {Users.map((user)=>(
  
  // eslint-disable-next-line react/jsx-key
  <div className='detail__content'>
                <div className='detail__content-img' key={user.id}>
                  <div className='detail__content-title'>
                      <h1>{user.title}</h1>
                      <hr className="hr"/> <div>
                      <p className="detail-work">{user.work}</p>
                  </div>
                </div>

                <div className="swiper-detail"> 
      

<Carousel
      swipeable={true}
      draggable={true}
      showDots={false}
      centerMode={true}
      responsive={responsive}
      ssr={true}
      infinite={true}
      transitionDuration={500}
      containerClass="react-multi-carousel-list"
      removeArrowOnDeviceType={[ "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"

      > 
      <div className='content_imagen'>
        <div className='content_imagen-img'>
          <img src={user.img1} alt={user.title} className="imagen_detail" />
        </div>
     </div>
     <div className='content_imagen'>
        <div className='content_imagen-img'>
          <img src={user.img2} alt={user.title} className="imagen_detail" />
        </div>
     </div>
     <div className='content_imagen'>
        <div className='content_imagen-img'>
          <img src={user.img3} alt={user.title} className="imagen_detail" />
        </div>
     </div>
     <div className='content_imagen'>
        <div className='content_imagen-img'>
          <img src={user.img4} alt={user.title} className="imagen_detail" />
        </div>
     </div>
     <div className='content_imagen'>
        <div className='content_imagen-img'>
          <img src={user.img5} alt={user.title} className="imagen_detail" />
        </div>
     </div>
     <div className='content_imagen'>
        <div className='content_imagen-img'>
          <img src={user.img6} alt={user.title} className="imagen_detail" />
        </div>
     </div>
     <div className='content_imagen'>
        <div className='content_imagen-img'>
          <img src={user.img7} alt={user.title} className="imagen_detail" />
        </div>
     </div>
     <div className='content_imagen'>
        <div className='content_imagen-img'>
          <img src={user.img8} alt={user.title} className="imagen_detail" />
        </div>
     </div>
     <div className='content_imagen'>
        <div className='content_imagen-img'>
          <img src={user.img9} alt={user.title} className="imagen_detail" />
        </div>
     </div>
     <div className='content_imagen'>
        <div className='content_imagen-img'>
          <img src={user.img10} alt={user.title} className="imagen_detail" />
        </div>
     </div>
     
    </Carousel>
                </div>
          </div>
          <div className='detail__content-subtitle'>
                    <h4>Descripción</h4>
                <div className='detail__content-parrafo'>
                    <p  className="detail-description">{user.description}</p>  
                    <hr className="hr2" />
                </div>       
                </div>
                <div className="detail_content-ubication">
                  <p className="detail-ubication">{user.ubication}</p>
          </div>
  </div>
    ))}
  </div>
  );
}

export default ObrasListDetail;
{/*  <Swiper 
                     slidesPerView={'2'}
                     centeredSlides={true}
                     spaceBetween={5}
                     loop={true}
                     pagination={{
                       clickable: true,
                     }}
                     navigation={true}
                     modules={[Navigation, Pagination]}
                     className="mySwiper"
           >
             

               <SwiperSlide>
                 <div className='content_imagen'>
                     <div className='content_imagen-img'>
                         <img src={user.img1} alt={user.title} className="imagen_detail" />
                     </div>
                 </div>
               </SwiperSlide>
               <SwiperSlide>
                 <div className='content_imagen'>
                     <div className='content_imagen-img'>
                         <img src={user.img2} alt={user.title} className="imagen_detail" />
                     </div>
                 </div>
               </SwiperSlide>
               <SwiperSlide>
                 <div className='content_imagen'>
                     <div className='content_imagen-img'>
                         <img src={user.img3} alt={user.title} className="imagen_detail" />
                     </div>
                 </div>
               </SwiperSlide>
               <SwiperSlide>
                 <div className='content_imagen'>
                     <div className='content_imagen-img'>
                         <img src={user.img4} alt={user.title} className="imagen_detail" />
                     </div>
                 </div>
               </SwiperSlide>
               <SwiperSlide>
                 <div className='content_imagen'>
                     <div className='content_imagen-img'>
                         <img src={user.img5} alt={user.title} className="imagen_detail" />
                     </div>
                 </div>
               </SwiperSlide>
               <SwiperSlide>
                 <div className='content_imagen'>
                     <div className='content_imagen-img'>
                         <img src={user.img6} alt={user.title} className="imagen_detail" />
                     </div>
                 </div>
               </SwiperSlide>
               <SwiperSlide>
                 <div className='content_imagen'>
                     <div className='content_imagen-img'>
                         <img src={user.img7} alt={user.title} className="imagen_detail" />
                     </div>
                 </div>
               </SwiperSlide>
               <SwiperSlide>
                 <div className='content_imagen'>
                     <div className='content_imagen-img'>
                         <img src={user.img8} alt={user.title} className="imagen_detail" />
                     </div>
                 </div>
               </SwiperSlide>
               <SwiperSlide>
                 <div className='content_imagen'>
                     <div className='content_imagen-img'>
                         <img src={user.img9} alt={user.title} className="imagen_detail" />
                     </div>
                 </div>
               </SwiperSlide>
               <SwiperSlide>
                 <div className='content_imagen'>
                     <div className='content_imagen-img'>
                         <img src={user.img10} alt={user.title} className="imagen_detail" />
                     </div>
                 </div>
               </SwiperSlide>
               <SwiperSlide>
                 <div className='content_imagen'>
                     <div className='content_imagen-img'>
                         <img src={user.img5} alt={user.title} className="imagen_detail" />
                     </div>
                 </div>
               </SwiperSlide>

           </Swiper>   */}