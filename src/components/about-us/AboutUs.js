import React from 'react';
import './AboutUs.css';
import SiteHistory from './SiteHistory';
import SiteMission from './SiteMission';
import { Route, Link, useRouteMatch } from 'react-router-dom'

function AboutUs() {
  const { url, path } = useRouteMatch()

  return (
    <div className="about-us">
      <ul>
        <li>
          <Link>История сайта</Link>
        </li>
        <li>
          <Link>Миссия сайта</Link>
        </li>
      </ul>
      <Route>
        <SiteHistory />
      </Route>
      <Route>
        <SiteMission />
      </Route>
    </div>
  )
}

export default AboutUs;