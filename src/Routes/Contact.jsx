import React from 'react'
import Form from '../Components/Form'
import { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const { state } = useContext(ContextGlobal);
  return (
    <div className={state.theme=== 'light' ? 'light' : 'dark'}>
      <h2 className='contactH2'>Want to know more?</h2>
      <p className='contactP'>Send us your questions and we will contact you</p>
      <Form/>
    </div>
  )
}

export default Contact