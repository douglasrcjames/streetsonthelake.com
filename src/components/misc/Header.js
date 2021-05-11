import React, { Component } from 'react'
import { NavLink, Link, withRouter } from "react-router-dom";

import "../../assets/css/Header.scss";

class Header extends Component {
    render() {
        return (
            <header>
                <nav className="nav-container">
                    <div className="center-text">
                        <Link to="/" className="">
                            <span className="nav-l-text">Sarah + Cooper</span>
                        </Link>
                    </div>
                   
                    <div className="nav-links">
                        <NavLink 
                            exact
                            to="/" 
                            className="nav-link" 
                            activeClassName="nav-select">
                            Story
                        </NavLink>
                        <NavLink 
                            exact
                            to="/event" 
                            className="nav-link" 
                            activeClassName="nav-select">
                            Event
                        </NavLink>
                        <NavLink 
                            exact
                            to="/rsvp" 
                            className="nav-link" 
                            activeClassName="nav-select">
                            RSVP
                        </NavLink>
                        <NavLink 
                            exact
                            to="/registry" 
                            className="nav-link" 
                            activeClassName="nav-select">
                            Registry
                        </NavLink>
                    </div>
                    
                </nav>
            </header>
        )
    }
}

export default withRouter(Header);