import React from 'react';
import { useQuery, gql } from '@apollo/client';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './Schedule.css';
// import required modules
import { FreeMode, Pagination } from 'swiper';

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
          scheduleDescription
          date
        }
      }
    }
  }
`;

export default function Schedule() {
  const { data } = useQuery(SPEAKERSCOMPONENT);
  return (
    <section className='schedule' id='schedule'>
      <div className='title__container'>
        <span className='title'>Schedule</span>
        <span className='description'>this will be the event schedule ...</span>
      </div>

      {data === undefined ? (
        <></>
      ) : (
        <Swiper
          breakpoints={{
            375: {
              width: 375,
              slidesPerView: 1,
            },
            600: {
              width: 600,
              slidesPerView: 2,
            },
            1000: {
              width: 1000,
              slidesPerView: 3,
            },
          }}
          // slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className='swiper-container'
        >
          {data.speakers.data.map((speaker, index) => {
            return (
              <SwiperSlide key={index}>
                <div
                  className='schedule__card'
                  key={`key ${speaker.attributes.name}`}
                >
                  <div className='shedule__header'>
                    <img
                      src={`http://localhost:1338${speaker.attributes.photo.data.attributes.url}`}
                      alt={speaker.attributes.name}
                      className='schedule__image'
                    />
                    <div>
                      <span className='schedule__name'>
                        {speaker.attributes.name}
                      </span>
                      <span className='schedule__day'>
                        {/* {speaker.attributes.date} */}
                        02/10/2022
                      </span>
                    </div>
                  </div>
                  <span className='schedule__description'>
                    {/* {speaker.attributes.scheduleDescription} */}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                    quo odit optio laboriosam enim, recusandae voluptate totam
                    ipsam similique sit voluptates omnis adipisci nemo
                    aspernatur, nulla natus quos, sint ut!
                  </span>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </section>
  );
}
