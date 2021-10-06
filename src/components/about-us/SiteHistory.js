import React from 'react';
import './AboutContent.css';
import { TranslationContext } from '../../contexts/translations/TranslationContext'

function SiteHistory () {
  const translation = React.useContext(TranslationContext)

  return (
    <div className="about-content">
      <h3>{translation.texts.aboutUs.story.title}</h3>
      <p>
      {translation.texts.aboutUs.story.text}
      </p>
    </div>
  )
}

export default SiteHistory;