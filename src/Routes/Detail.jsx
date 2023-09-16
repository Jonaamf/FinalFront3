import React, { useEffect, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ContextGlobal } from '../Components/utils/global.context';

const Detail = () => {
  const { state } = useContext(ContextGlobal);
  const { id } = useParams();
  const [dentist, setDentist] = useState(null);

  useEffect(() => {
    const selectedDentist = state.data.find(d => d.id === parseInt(id));

    if (selectedDentist) {
      setDentist(selectedDentist);
    }
  }, [id, state.data]);

  if (!dentist) return <div>Loading...</div>;

  return (
    <div className={state.theme=== 'light' ? 'light' : 'dark'}>
       <h1 className='detailDentista'>Detalles del Dentista: </h1>
      <h2 className='tituloDentista'>{dentist.name}</h2>
      <ul className='listaDetallesDentistas'>
        <ol>
        Email: {dentist.email}
        </ol>
        <ol>
        Teléfono: {dentist.phone}
        </ol>
        <ol>
        Sitio web: {dentist.website}
        </ol>
      </ul>
    </div>
  );
};

export default Detail;