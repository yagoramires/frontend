/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import './Home.css';
import { useQuery, gql } from '@apollo/client';

const HOMECOMPONENT = gql`
  query getHomeComponent {
    homepageConfig {
      data {
        attributes {
          background {
            data {
              attributes {
                url
              }
            }
          }
          text1
          text2
        }
      }
    }
  }
`;

export default function Home() {
  const { data } = useQuery(HOMECOMPONENT);

  return (
    <section className='home' id='home'>
      {data === undefined ? (
        <></>
      ) : (
        <img
          className='home__background'
          src={`http://localhost:1338${data.homepageConfig.data.attributes.background.data.attributes.url}`}
          alt='event-arena'
        />
      )}

      <div className='home__content'>
        {data === undefined ? (
          <></>
        ) : (
          <div className='home__text'>
            <span>{data.homepageConfig.data.attributes.text1}</span>
            <span>{data.homepageConfig.data.attributes.text2}</span>
          </div>
        )}
        <a
          href='https://www.ingresso.com/home?city=rio-de-janeiro&partnership=home'
          className='home__btn'
          target='_blank'
        >
          BUY A TICKET
        </a>
      </div>
    </section>
  );
}
