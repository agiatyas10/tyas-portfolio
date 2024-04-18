import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      link: 'https://www.linkedin.com/in/agiatyas/',
      name: 'Najibullah Rizqy Fathoni',
      role: 'Mobile Developer.',
      test: 'I highly recommend Agia for Frontend Developer positions. She is a skilled developer with a deep understanding of front-end development concepts, and consistently demonstrated a strong work ethic and attention to detail. Agia would be a valuable asset to any team.',
    },
    {
      id: 2,
      link: 'https://www.linkedin.com/in/agiatyas/',
      name: 'Adi Putra',
      role: 'Full Stack developer',
      test: "Tyas is very passionate for her work. Her focus keeps everything moving smoothly as planned before, she makes sure every project deadlines are met, and makes sure that all of her project is working on meets the highest standards.",
    },
    {
      id: 3,
      link: 'https://www.linkedin.com/in/agiatyas/',
      name: 'Aswin Sigma Adisaputra',
      role: 'Frontend Developer at PT. Infosys Solusi Terpadu.',
      test: 'Great developer with exceptional talent to write code beautifully yet tested well. As long I worked with Tyas, she has always finished her work on time, and on top of that she has always tried her best to apply best practice in her code.',
    },
    {
      id: 4,
      link: 'https://www.linkedin.com/in/agiatyas/',
      name: 'Indah Sawitri Ramonasari',
      role: 'Software Engineer.',
      test: "As long as I work with tyas, she is a talented developer. She is very professional and able to fit into the team quickly. It's a joy to be in a team with tyas.",
    },
  ];
  return (
    <section id="testmonials">
      <h5>Feedback from my peers</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {testimonials.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
            <div className="client__avatar">
              <a href={test.link}>
                <BsLinkedin />
              </a>
            </div>
            <h5 className='client__name'>{test.name}</h5>
            <small className="client__review">{test.test}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials