import React from 'react';
import './AboutContent.css';
import { TranslationContext } from '../../contexts/translations/TranslationContext'

function Hobbies() {
  const translation = React.useContext(TranslationContext)
  return (
    <div className="about-content">
      <p>
      {translation.texts.aboutMe.myHobby}
      </p>
    </div>
  )
}

export default Hobbies;