import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import { TranslationContext } from '../contexts/translations/TranslationContext'

function NavBar () {
  const translation = React.useContext(TranslationContext)
  return (
    <nav className="menu">
      <NavLink exact to="/" className="menu__link" activeClassName="menu__link_active">{translation.navigation.home}</NavLink>
      <NavLink to="/reviews" activeClassName="menu__link_active" className="menu__link">{translation.navigation.overview}</NavLink>
      <NavLink to="/about-me" activeClassName="menu__link_active" className="menu__link">{translation.navigation.aboutMe}</NavLink>
      <NavLink to="/about-us" activeClassName="menu__link_active" className="menu__link">{translation.navigation.aboutUs}</NavLink>
    </nav>
  )
}

export default NavBar;