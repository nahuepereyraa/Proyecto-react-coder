import React from "react";

export const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <h1>Inicio</h1>
                <ul className="nav-links">
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/productos">Productos</a></li>
                    <li><a href="/acerca-de">Acerca de</a></li>
                    <li><a href="/contacto">Contacto</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;