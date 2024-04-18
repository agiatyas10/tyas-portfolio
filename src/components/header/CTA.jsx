import React from 'react';
import CV from '../../assets/AGIA TYAS SAKANTHI_UPDATED CV_2024.pdf';
import PORTO from '../../assets/Portfolio_Agia Tyas Sakanthi.pdf';

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href={PORTO} download className="btn">
        Download Portfolio
      </a>
      <a href="https://wa.me/089613122939" target="_blank" className="btn btn-primary">
        Let's talk
      </a>
    </div>
  );
};

export default CTA;
