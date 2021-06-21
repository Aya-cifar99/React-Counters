import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
    render() { 
        return (
            <nav className="navbar navbar-light bg-light">
                
                    <NavLink to="/counters" class="nav-item nav-link">Home</NavLink>
                    <NavLink to="/login" class="nav-item nav-link">Login</NavLink>
                    <NavLink to="/first" class="nav-item nav-link">First</NavLink>
                    <NavLink to="/second" class="nav-item nav-link">Second</NavLink>
                
            </nav>
          );
    }
}
 
export default NavBar;