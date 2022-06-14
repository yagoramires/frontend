import React from 'react';
import './Speakers.css';

import { useQuery, gql } from '@apollo/client';

const SPEAKERSCOMPONENT = gql`
  query getSpeakersComponent {
    speakers {
      data {
        attributes {
          photo {
            data {
              attributes {
                url
              }
            }
          }
          name
        }
      }
    }
  }
`;

export default function Speakers() {
  const { data } = useQuery(SPEAKERSCOMPONENT);

  return (
    <section className='speakers' id='speakers'>
      <div className='title__container'>
        <span className='title'>Speakers</span>
        <span className='description'>these will be the speakers ...</span>
      </div>
      <div className='speakers__cards'>
        {data === undefined ? (
          <></>
        ) : (
          data.speakers.data.map((speaker, index) => {
            return (
              <div className='speakers__card' key={index}>
                <img
                  className='speakers__image'
                  src={`http://localhost:1338${speaker.attributes.photo.data.attributes.url}`}
                  alt='speaker'
                />
                <span className='speakers__name'>
                  {speaker.attributes.name}
                </span>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
}
