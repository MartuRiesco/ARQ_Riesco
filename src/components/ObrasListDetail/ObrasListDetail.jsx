import "./style.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSingleItemFromDatabase } from "../../services/firebase";

function ObrasListDetail() {
  const [user, setUser] = useState({});
  const params = useParams();
  const idUser = params.idUser;

  useEffect(() => {
    getSingleItemFromDatabase(idUser)
      .then((respuesta) => {
        setUser(respuesta);
      })
      .catch((error) => alert(error));
  }, [idUser]);


  return (
    <div className='detail container'>
        <div className='detail__content'>
                <div className='detail__content-img' key={user.id}>
                    <div className='detail__content-title'>
                        <h1>{user.title}</h1>
                    </div>
                    <div>
                        <img src={user.img} alt={user.title} />
                    </div>
                    <div className='detail__content-subtitle'>
                        <h4>Descripción</h4>
                    </div>
                    <div className='detail__content-parrafo'>
                        <p>{user.description}</p>  
                    </div>       
                </div>
        </div>
    </div>
  );
}

export default ObrasListDetail;