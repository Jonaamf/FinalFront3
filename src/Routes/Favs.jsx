import React from "react";
import Card from "../Components/Card";
import { useEffect, useState, useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Favs = () => {
  const {state} = useContext(ContextGlobal);
  const [favDentists, setFavDentists] = useState(JSON.parse(localStorage.getItem('favList')) || []);

  useEffect(() => {
    const onStorage = () => {
        setFavDentists(JSON.parse(localStorage.getItem('favList')) || []);
    };

    window.addEventListener('storage', onStorage);

    return () => {
        window.removeEventListener('storage', onStorage);
    };
}, []);

  return (
    <>
      <h1 className={state.theme=== 'light' ? 'light' : 'dark'}>Dentists Favs</h1>
      <div className={state.theme=== 'light' ? 'light' : 'dark'}>
        <div className="card-grid">
        {favDentists.map(dentist => (
          <Card key={dentist.id} dentist={dentist} showAdd={false} />
        ))}
        </div>
      </div>
    </>
  );
};

export default Favs;