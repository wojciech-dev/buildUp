import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Header, NavContainer, Input, NavOpen, Height } from './NavbarStyled';


const NavBar = () => {

    const [checked, setChecked] = useState(false);

    const handleCheckboxChange = e => {
        setChecked(e.target.checked);
    }

    return (
        <>
            <Header>
                <a href="/" className="logo">Logo</a>
                <Input
                    type="checkbox"
                    id="nav"
                    style={{ display: 'none' }}
                    checked={checked}
                    onChange={handleCheckboxChange}
                />
                <NavOpen htmlFor="nav" className="nav-open"><i></i><i></i><i></i></NavOpen>
                <NavContainer className="nav-container" onClick={() => setChecked(false)}>
                    <nav className="nav">
                        <NavLink exact activeClassName='is-active' to="/">Home</NavLink>
                        <NavLink exact activeClassName='is-active' to="/about">About</NavLink>
                        <NavLink exact activeClassName='is-active' to="/projects">Projects</NavLink>
                        <NavLink exact activeClassName='is-active' to="/gallery">Gallery</NavLink>
                        <NavLink exact activeClassName='is-active' to="/contact">Contact</NavLink>
                    </nav>
                </NavContainer>
            </Header>
            <Height className="height" />
        </>
    );

};

export default NavBar;
