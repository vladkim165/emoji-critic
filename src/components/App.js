import React, { useEffect, useState } from 'react';
import './App.css';
import Dashboard from './Dashboard';
import Header from './Header';
import Review from './Review';
import Reviews from './Reviews';
import AboutMe from './about-me/AboutMe';
import AboutUs from './about-us/AboutUs';
import PageNotFound from './PageNotFound'
import { TranslationContext, translations } from '../contexts/translations/TranslationContext'

import { Route, Switch } from 'react-router-dom';

function App() {

  const [lang, setLang] = React.useState('ru');

  const [reviews, setReviews] = useState();
  useEffect(() => {
    fetch('https://api.nomoreparties.co/emoji-critic-rus').then((res) => {
      return res.json();
    }).then((parsedReviews) => {
      const reviews = Object.values(parsedReviews);
      setReviews(reviews);
    })
  }, []);

  return (
    <div className="App">
      <TranslationContext.Provider value={translations[lang]}>
      <Header onLangSelect={setLang}/>
      <Switch>
        <Route exact path="/emoji-critic">
          <Dashboard />
        </Route>
        <Route exact path="/reviews">
          <Reviews reviews={reviews} />
        </Route>
        <Route exact path="/reviews/:id">
          <Review reviews={reviews} />
        </Route>
        <Route path="/about-me">
          <AboutMe />
        </Route>
        <Route path="/about-us">
          <AboutUs />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
      </TranslationContext.Provider>
    </div>
  );
}

export default App;
