import React from 'react';
import Faq from '../components/Faq/Faq';
import Header from '../components/Header/Header';
import Home from '../components/Home/Home';
import Location from '../components/Location/Location';
import Speakers from '../components/Speakers/Speakers';

export default function Homepage() {
  return (
    <div className='homepage'>
      <Header />
      <main>
        <section>
          <Home />
          <Speakers />
          <Location />
          <Faq />
        </section>
      </main>
    </div>
  );
}
