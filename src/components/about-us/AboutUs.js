import React from 'react';
import './AboutUs.css';
import SiteHistory from './SiteHistory';
import SiteMission from './SiteMission';
import { Route, NavLink, useRouteMatch } from 'react-router-dom';
import { TranslationContext } from '../../contexts/translations/TranslationContext'

function AboutUs () {
  const { path, url } = useRouteMatch();
  const translation = React.useContext(TranslationContext)

  return (
    <div className="about-us">
      <ul>
        <li>
          <NavLink activeClassName="li_active" to={`${url}/site-history`}>{translation.texts.aboutUs.buttons.story}</NavLink>
        </li>
        <li>
          <NavLink activeClassName="li_active" to={`${url}/site-mission`}>{translation.texts.aboutUs.buttons.mission}</NavLink>
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