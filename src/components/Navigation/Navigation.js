import { NavLink, Outlet  } from "react-router-dom";
import s from './Navigation.module.css';

const Navigation = () => {
    return(
        <nav className={s.navigate}>
            <NavLink  
                to="/"
                className={s.link} 
            >
                Home
            </NavLink>

            <NavLink to="/movies"
                className={s.link}    
            >
                Search movies
                <Outlet/>
            </NavLink>
        </nav>
        

    )
    
}

export default Navigation;