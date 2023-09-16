import React, { useState, useContext } from 'react';
import { ContextGlobal } from './utils/global.context';

const Form = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [nombreError, setNombreError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [enviado, setEnviado] = useState(false);
  const {state} = useContext(ContextGlobal);

  const handleNombre = (e) => {
    const value = e.target.value;
    setNombre(value);

    if (value.length >= 5 && !value.startsWith(" ")) {
      setNombreError("");
    } else {
      setNombreError("Por favor chequea que la información sea correcta");
    }
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleEmail = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (emailRegex.test(value)) {
      setEmailError("");
    } else {
      setEmailError("Por favor ingresa un correo electrónico válido");
    }
  }

  const registrar = (e) => {
    e.preventDefault();

    if (nombre.length >= 5 && !nombre.startsWith(" ") && emailRegex.test(email)) {
      setEnviado(true);
    } else {
      alert("Por favor verifique su información nuevamente");
    }
  }

  return (
    <div className={state.theme=== 'light' ? 'light' : 'dark'}>
      <form className="formulario" onSubmit={registrar}>
        <input 
          type="text" 
          name="nombre" 
          placeholder="Ingrese su nombre completo" 
          onChange={handleNombre} 
          value={nombre}
        />
        <div className="alert">{nombreError}</div>
        <input 
          type="email" 
          name="email" 
          placeholder="Ingrese su email" 
          onChange={handleEmail} 
          value={email}
        />
        <div className="alert">{emailError}</div>
        <button type="submit">Confirmar</button>
      </form>
      {enviado && <div className='formEnviado'>Gracias {nombre}, te contactaremos cuando antes vía mail</div>}
    </div>
  );
};

export default Form;