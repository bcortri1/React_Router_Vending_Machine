import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import SnackList from "./SnackList";


const Navbar = () => {
    return <nav className="Navbar">
        {SnackList.map(({ name }) => {
            return <NavLink key={`${name}-Link`} to={`/${name}`}>{name}</NavLink>
        })}
    </nav>
};


export default Navbar;