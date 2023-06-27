import { Carousel } from 'react-carousel-minimal';
import { useState, useEffect } from 'react';
import Slider from 'react-animated-slider';
import './style.css'
import { getObrasDestacadas } from '../../services/firebase';

function Carousell() {
 /* const data = [
    {
      image: "https://i.imgur.com/zHGiH7e.jpg",
      caption: "Proyecto A"
    },
    {
        image: "https://i.imgur.com/XMlxebE.jpg",
        caption: "Proyecto B"
      },
      {
        image: "https://i.imgur.com/JIwovxl.jpg",
        caption: "Proyecto C"
        
      }
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className="App">
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={data}
            time={2000}
            width="100vw"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={false}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={false}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "100vw",
              maxHeight: "auto",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
  ); */
  const [Datos, setDatos] = useState([]);


  async function leerDatos() {
    let respuesta = await getObrasDestacadas();
    setDatos(respuesta);
   
  }
  useEffect(() => {
    leerDatos();
  }, []);
  return(
   
<Slider autoplay={3000} /*  classNames={horizontalCss} */>
{Datos.map((item, index) => (
	<div className='foto-carousel'
		key={index}
		style={{ background: `url('${item.img}') no-repeat center center`,
    backgroundSize:'cover'
  }}
	>
		<div className="center">
			<h1 className='titulo-carousel'>{item.title}</h1>
			<p className='descripcion-carousel'>{item.description}</p>
			<button className='boton-carousel'>{item.button}</button>
		</div>
	</div>
))}
</Slider>
  )
}

export default Carousell;