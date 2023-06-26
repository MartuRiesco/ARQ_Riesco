import { Carousel } from 'react-carousel-minimal';

function Carousell() {
 const data = [
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
            height="700px"
            captionStyle={captionStyle}
            radius="0px"
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
  );
}

export default Carousell;