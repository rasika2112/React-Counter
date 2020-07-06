import React from 'react';

//stateless functional components
// cannot use lifecycle hooks in stateless functional components
const NavBar = ({ totalCounters }) => {
        console.log('Navbar-Rendered');
        return ( 
        <nav className="navbar navbar-light bg-light">
        <a href="www.google.com" className="navbar-brand">
    NavBar <span className="badge badge-pill badge-secondary">{ totalCounters}</span>
        </a>
    </nav> 
    );
}
 
export default NavBar;
