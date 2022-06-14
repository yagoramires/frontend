import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { AiFillCaretDown } from 'react-icons/ai';
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
      e.currentTarget.firstElementChild.classList.add('rotate');
    } else {
      e.currentTarget.nextElementSibling.classList.remove('hidden');
      e.currentTarget.firstElementChild.classList.remove('rotate');
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
                    <AiFillCaretDown className='rotate' />
                  </span>
                </span>

                <span className={`faq__answer hidden`}>
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
