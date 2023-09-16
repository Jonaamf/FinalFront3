import React, { useContext, useEffect, useState } from 'react'
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/global.context'

const Home = () => {

  const { state, dispatch } = useContext(ContextGlobal);

  useEffect(() => {
    const getDentists = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/`);

        if (!response.ok) {
          throw new Error('No se pudo obtener la información de los dentistas');
        }

        const data = await response.json();
        dispatch({ type: "SET_API_DATA", payload: data });
      } catch (error) {
        console.error(error);
      }
    };
    getDentists();
  }, []);

  if (state.data.length === 0) return <div>Loading...</div>;

  return (
    <main className={state.theme=== 'light' ? 'light' : 'dark'} >
      <h1 className='tituloHome'>Home</h1>
      <div className='card-grid'>
        {state.data.map(dentist => (
          <Card key={dentist.id} username={dentist.username} showAdd dentist={dentist} />
        ))}
      </div>
    </main>
  )
}
export default Home