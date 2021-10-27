import React from "react"
import { NavLink } from "react-router-dom"

const Menu = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand">
                    Meža ugunsbīstamības karte
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink
                                to="/map/now"
                                activeClassName="active"
                                className="nav-link"
                            >
                                Ugunsbīstamība šobrīd
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/use-api"
                                activeClassName="active"
                                className="nav-link"
                            >
                                API
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/about"
                                activeClassName="active"
                                className="nav-link"
                            >
                                Par tīmekļa vietni
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Menu
