import "./style.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSingleItemFromDatabase } from "../../services/firebase";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,Pagination } from 'swiper/modules';
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
      
          <Swiper 
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
                    </Swiper>  
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