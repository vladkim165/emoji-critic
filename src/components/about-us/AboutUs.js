import React from 'react';
import './AboutUs.css';
import SiteHistory from './SiteHistory';
import SiteMission from './SiteMission';
import { Route, NavLink, useRouteMatch } from 'react-router-dom';

function AboutUs () {
  const { path, url } = useRouteMatch();
  
  return (
    <div className="about-us">
      <ul>
        <li>
          <NavLink activeClassName="li_active" to={`${url}/site-history`}>История приложения</NavLink>
        </li>
        <li>
          <NavLink activeClassName="li_active" to={`${url}/site-mission`}>Наша миссия</NavLink>
        </li>
      </ul>
      <Route path={`${path}/site-history`}>
        <SiteHistory />
      </Route>
      <Route path={`${path}/site-mission`}>
        <SiteMission />
      </Route>
    </div>
  )
}

export default AboutUs;