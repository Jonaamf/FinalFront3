import React from 'react'
import { useContext } from 'react';
import { ContextGlobal } from './utils/global.context';

const Footer = () => {
  const { state, dispatch } = useContext(ContextGlobal);

  return (
    <footer className={state.theme=== 'light' ? 'light' : 'dark'}>
        <p className='firma'>Powered by Jonathan Manzolido</p>
        <img src="" alt='' />
    </footer>
  )
}
export default Footer