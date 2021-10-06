import React from 'react';
import './AboutContent.css';
import { TranslationContext } from '../../contexts/translations/TranslationContext'

function MyStory() {
  const translation = React.useContext(TranslationContext)
  return (
    <div className="about-content">
      <p>
      {translation.texts.aboutMe.myStory}
      </p>
    </div>
  )
}

export default MyStory;