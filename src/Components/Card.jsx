import React from "react";
import { Link} from 'react-router-dom';
import { useContext } from "react";
import { ContextGlobal } from "./utils/global.context";

const Card = ({ dentist, showAdd }) => {
  const { state } = useContext(ContextGlobal);
  const {id, name, username} = dentist

  const addFav = () => {
    // Obtener la lista actual de favoritos del localStorage
    const favList = JSON.parse(localStorage.getItem('favList')) || [];
  
    // Verificar si el dentista ya está en la lista de favoritos
    const isDentistInFav = favList.some(d => d.id === id);
  
    if (!isDentistInFav) {
      // Si el dentista no está en la lista, agregarlo
      favList.push(dentist);
  
      // Actualizar la lista de favoritos en el localStorage
      localStorage.setItem('favList', JSON.stringify(favList));
      window.dispatchEvent(new Event('storage'))
    }
  }
  const removeFav = () => {
    
    const newList = JSON.parse(localStorage.getItem('favList')) || [];
    const isDentistInFav = newList.some(d => d.id === id);
    
    if (isDentistInFav){
      const filteredList = newList.filter(d => d.id !== id)
      localStorage.setItem('favList', JSON.stringify(filteredList));
      window.dispatchEvent(new Event('storage'))
      console.log(filteredList)
    }
  }


  return (
    <div className="card">
      <div className={state.theme=== 'light' ? 'light' : 'dark'}>
        <img className="imgDentista" src="https://cdn-icons-png.flaticon.com/512/4100/4100436.png" alt="imgDentista" />
      </div>
        <h2 className={state.theme=== 'light' ? 'light' : 'dark'} ><Link to={`/detail/${id}`}>{name}</Link></h2>
      <div>
      {showAdd && <button onClick={addFav} className="favButton">Add Fav</button>}
      {!showAdd && <button onClick={removeFav} className="favButton"> Remove Fav</button>}
      </div>
    </div>
  );
};

export default Card;