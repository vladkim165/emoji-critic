import React from 'react';
import './AboutContent.css';
import { TranslationContext } from '../../contexts/translations/TranslationContext'

function Contact() {
  const translation = React.useContext(TranslationContext)
  return (
    <div className="about-content">
      <p>
        {translation.texts.aboutMe.myContacts}
      </p>
    </div>
  )
}

export default Contact;