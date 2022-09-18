import React from "react";
import './Nav.scss'
import {
    NavLink
  } from "react-router-dom";
class Nav extends React.Component {
    render() {
        return (
            <div className="topnav">
            <NavLink to="/" exact={true}>Home</NavLink>
            <NavLink to="/todo">Todo</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/user">User</NavLink>
                
                
            </div>
        );
    }
}
export default Nav;
