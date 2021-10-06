import React from 'react';
import './LangSelect.css';

function LangSelect(props) {
  function handleChange(e) {
    props.onLangSelect(e.target.value);
  }

  return (
    <select id="LangSelect" onChange={handleChange}>
      <option value="ru">Русский</option>
      <option value="en">English</option>
    </select>
  );
}

export default LangSelect;
