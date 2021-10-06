import React from 'react';
import './Dashboard.css';
import { TranslationContext } from '../contexts/translations/TranslationContext'

function Dashboard () {
  const translation = React.useContext(TranslationContext)
  return (
    <div className="dashboard">
      <h2>{translation.texts.home.title}</h2>
      <p>
      {translation.texts.home.subtitle}
      </p>
    </div>
  )
}

export default Dashboard; 