import React, { useContext } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { ContextGlobal } from './utils/global.context';
import CustomLink from './CustomLink';
import Contact from '../Routes/Contact';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  
  const { state, dispatch } = useContext(ContextGlobal);
 
  const toggleTheme = () => {
    dispatch({type:'TOGGLE_THEME'})
  }
  return (
    <div className={state.theme=== 'light' ? 'light' : 'dark'}>
      <nav>
        <ul className='ulNavBar'>
          <li>
          <CustomLink to="/" title="Home"/>
          </li>
          <li>
            <CustomLink to="/Contact" title='Contact'/>
          </li>
          <li>
            <CustomLink to="/Favs" title='Favs'/>
          </li>
        </ul>
        <button onClick={toggleTheme}>Change theme</button>
      </nav>
      <Outlet/>
    </div >
  )
}

export default Navbar