import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Header, NavContainer, Input, NavOpen, Height } from './NavbarStyled';

const NavBar = () => (
    <>
        <Header>
            <a href="/" className="logo">Logo</a>
            <Input type="checkbox" id="nav" style={{ display: 'none' }} />
            <NavOpen htmlFor="nav" className="nav-open"><i></i><i></i><i></i></NavOpen>
            <NavContainer className="nav-container">
                <nav className="nav">
                    <NavLink exact={true} activeClassName='is-active' to="/">Home</NavLink>
                    <NavLink exact={true} activeClassName='is-active' to="/about">About</NavLink>
                    <NavLink exact={true} activeClassName='is-active' to="/projects">Projects</NavLink>
                    <NavLink exact={true} activeClassName='is-active' to="/gallery">Gallery</NavLink>
                    <NavLink exact={true} activeClassName='is-active' to="/contact">Contact</NavLink>
                </nav>
            </NavContainer>
        </Header>
        <Height className="height" />
    </>
);

export default NavBar;
