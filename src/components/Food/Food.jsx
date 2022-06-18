/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { useQuery, gql } from '@apollo/client';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './Food.css';
// import required modules
import { FreeMode, Pagination } from 'swiper';

const FOODCOMPONENT = gql`
  query getFoodComponent {
    foods {
      data {
        attributes {
          sponsorLogo {
            data {
              attributes {
                url
              }
            }
          }
          name
          url
        }
      }
    }
  }
`;

export default function Food() {
  const { data } = useQuery(FOODCOMPONENT);
  return (
    <section className='food' id='food'>
      <div className='title__container'>
        <span className='title'>Food</span>
        <span className='description'>
          these will be the food options in the arena ...
        </span>
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
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
        >
          {data.foods.data.map((sponsor, index) => {
            return (
              <SwiperSlide key={index}>
                <div
                  className='food__card'
                  key={`key ${sponsor.attributes.name}`}
                >
                  <a href={sponsor.attributes.url} target='_blank'>
                    <img
                      src={`http://localhost:1338${sponsor.attributes.sponsorLogo.data.attributes.url}`}
                      alt={sponsor.attributes.name}
                      className='food__image'
                    />
                  </a>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </section>
  );
}
