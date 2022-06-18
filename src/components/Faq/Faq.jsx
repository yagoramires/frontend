import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { FaAngleUp } from 'react-icons/fa';
import './Faq.css';

const FAQCOMPONENT = gql`
  query getFaqComponent {
    faqs {
      data {
        attributes {
          question
          answer
        }
      }
    }
  }
`;

export default function Faq() {
  const { data } = useQuery(FAQCOMPONENT);

  const handleClick = (e) => {
    if (!e.currentTarget.nextElementSibling.className.includes('hidden')) {
      e.currentTarget.nextElementSibling.classList.add('hidden');
      e.currentTarget.firstElementChild.classList.remove('rotate');
      e.currentTarget.classList.remove('yellow');
      e.currentTarget.classList.add('black');
    } else {
      e.currentTarget.nextElementSibling.classList.remove('hidden');
      e.currentTarget.firstElementChild.classList.add('rotate');
      e.currentTarget.classList.remove('black');
      e.currentTarget.classList.add('yellow');
    }
  };

  return (
    <section className='faq' id='faq'>
      <div className='title__container'>
        <span className='title'>FAQ</span>
        <span className='description'>frequently asked questions ...</span>
      </div>
      <div className='faq__questions'>
        {data === undefined ? (
          <p>Loading</p>
        ) : (
          data.faqs.data.map((question, index) => {
            return (
              <div className='faq__questions__container' key={index}>
                <span className='faq__question' onClick={handleClick}>
                  {question.attributes.question}
                  <span className='right'>
                    <FaAngleUp className='rotate yellow' />
                  </span>
                </span>

                <span className={'faq__answer hidden'}>
                  {question.attributes.answer}
                </span>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
}
