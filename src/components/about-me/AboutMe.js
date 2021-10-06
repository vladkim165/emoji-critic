import React from "react";
import { Route, NavLink, useRouteMatch } from "react-router-dom";
import MyStory from "./MyStory";
import Hobbies from "./Hobbies";
import Contact from "./Contact";
import './AboutMe.css';
import { TranslationContext } from '../../contexts/translations/TranslationContext'

function AboutMe() {
  const { path, url } = useRouteMatch();
  const translation = React.useContext(TranslationContext)

  return (  
    <div className="about-me">
      <ul className="links">
        <li>
          <NavLink activeClassName="li_active" to={`${url}/my-story`}>{translation.texts.aboutMe.buttons.myStory}</NavLink>
        </li>
        <li>
          <NavLink activeClassName="li_active" to={`${url}/hobbies`}>{translation.texts.aboutMe.buttons.myHobby}</NavLink>
        </li>
        <li>
          <NavLink activeClassName="li_active" to={`${url}/contact`}>{translation.texts.aboutMe.buttons.myContacts}</NavLink>
        </li>
      </ul>
      <Route path={`${path}/my-story`}>
        <MyStory />
      </Route>
      <Route path={`${path}/hobbies`}>
        <Hobbies />
      </Route>
      <Route path={`${path}/contact`}>
        <Contact />
      </Route>
    </div>
  );
}

export default AboutMe;