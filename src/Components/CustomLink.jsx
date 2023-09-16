import {useContext} from 'react'
import { ContextGlobal } from './utils/global.context';
import { Link } from 'react-router-dom';

const CustomLink = ({to, title}) => {

    const {state} = useContext(ContextGlobal);

    return (
        <Link className={state.theme=== 'light' ? 'light' : 'dark'} to={to}>{title}</Link>
    )
}

export default CustomLink