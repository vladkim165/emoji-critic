import React from "react";
import { Route, NavLink, useRouteMatch } from "react-router-dom";
import MyStory from "./MyStory";
import Hobbies from "./Hobbies";
import Contact from "./Contact";
import './AboutMe.css';

function AboutMe() {
  const { path, url } = useRouteMatch();

  return (
    <div className="about-me">
      <ul className="links">
        <li>
          <NavLink activeClassName="li_active" to={`${url}/my-story`}>Моя история</NavLink>
        </li>
        <li>
          <NavLink activeClassName="li_active" to={`${url}/hobbies`}>Хобби</NavLink>
        </li>
        <li>
          <NavLink activeClassName="li_active" to={`${url}/contact`}>Контактная информация</NavLink>
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