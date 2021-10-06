import React from 'react';
import './Header.css';
import Logo from './Logo';
import NavBar from './NavBar'
import LangSelect from './LangSelect'

function Header (props) {

  return (
    <div className="header">
      <Logo />
      <NavBar />
      <LangSelect onLangSelect={props.onLangSelect}/>
    </div>
  )
}

export default Header;