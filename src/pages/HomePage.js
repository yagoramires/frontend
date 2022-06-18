import React from 'react';
import Faq from '../components/Faq/Faq';
import Header from '../components/Header/Header';
import Home from '../components/Home/Home';
import Speakers from '../components/Speakers/Speakers';
import Location from '../components/Location/Location';
import Code from '../components/Code/Code';
import Schedule from '../components/Schedule/Schedule';
import Food from '../components/Food/Food';

export default function Homepage() {
  return (
    <div className='homepage'>
      <Header />
      <main>
        <section>
          <Home />
          <Speakers />
          <Schedule />
          <Location />
          <Food />
          <Code />
          <Faq />
        </section>
      </main>
    </div>
  );
}
