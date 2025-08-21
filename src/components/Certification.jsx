import React from 'react'
import SkillCard from './SkillCard';

const certificationItems = [
    {
    imgSrc: '/images/react.svg',
    label: 'React',
    desc: 'workshop completion certificate'
  },
  {
    imgSrc: '/images/aws.svg',
    label: 'AWS Cloud',
    desc: 'Course completion certificate'
  },
  
  {
    imgSrc: '/images/java.svg',
    label: 'Java',
    desc: 'Intership completion certificate'
  },
];

const Certification = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">
          Certifications
        </h2>
        <p className="text-gray-400 mt-3 mb-8 max-w-[50ch] reveal-up">
          A collection of certifications that validate my knowledge and 
          expertise across react, cloud,java development technologies.
        </p>
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {certificationItems.map(({ imgSrc, label, desc }, key) => (
            <SkillCard
              key={key}
              imgSrc={imgSrc}
              label={label}
              desc={desc}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certification;
