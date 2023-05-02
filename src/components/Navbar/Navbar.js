import React from "react";
import { NavLink } from "react-bootstrap";
import styles from "./navbar.module.css";
import classNames from "classnames";
import img1 from "./img/logo1.png";

export const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container">
                    <img
                        src={img1}
                        width="100"
                        height="90"
                        alt="alogo de paseo central"
                    />
                    <button
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        class="navbar-toggler"
                        data-target="#navbarSupportedContent"
                        data-toggle="collapse"
                        type="button"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link">
                                    Inicio{" "}
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/nosotros" className="nav-link">
                                    Productos{" "}
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/servicios" className="nav-link">
                                    Nosotros{" "}
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contacto" className="nav-link">
                                    Contactanos{" "}
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/perfil" className="nav-link">
                                    Perfil{" "}
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    );
};
export default Navbar;