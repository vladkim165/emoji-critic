import React from 'react';
import './AboutContent.css';
import { TranslationContext } from '../../contexts/translations/TranslationContext'

function SiteMission() {
  const translation = React.useContext(TranslationContext)

  return (
    <div className="about-content">
      <h3>{translation.texts.aboutUs.mission.title}</h3>
      <p>
      {translation.texts.aboutUs.mission.text}
      </p>
    </div>
  )
}

export default SiteMission;