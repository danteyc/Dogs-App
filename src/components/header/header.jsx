import "./header.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";

export function Header(){
    return(
        <header>
            <div className="container">
                <NavLink to="/">Dogs App <FontAwesomeIcon icon={faPaw} className="icon" /></NavLink>
            </div>
        </header>
    )
}