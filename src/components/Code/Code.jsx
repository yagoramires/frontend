import React from 'react';
import './Code.css';

import { useQuery, gql } from '@apollo/client';

const CODECOMPONENT = gql`
  query getCodeComponent {
    codeOfConduct {
      data {
        attributes {
          Code
        }
      }
    }
  }
`;

export default function Info() {
  const { data } = useQuery(CODECOMPONENT);

  return (
    <section className='code' id='code'>
      <div className='code__container'>
        <div className='title__container'>
          <span className='title'>Code of Conduct</span>
          <span className='description'>organization policy ...</span>
        </div>
        {data === undefined ? (
          <></>
        ) : (
          <p>{data.codeOfConduct.data.attributes.Code}</p>
        )}
      </div>
    </section>
  );
}
