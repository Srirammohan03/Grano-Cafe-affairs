import { useEffect, useRef, useState } from 'react';
import testimonialsBg from '../assets/BG-h1.jpg';
import quoteCup from '../assets/coffee-cup-quote.png';
import '../styles/sections.css';

interface Testimonial {
  id: number;
  text: string;
  author: string;
}

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      text: `Great atmosphere, excellent drinks (I tried two of them and plan to work through the menu) and friendly staff – a combination for success! Add the commitment to serve and this is a venture I can endorse without reservation. May God honor and bless your step of faith.`,
      author: 'Shane Jennifer',
    },
    {
      id: 2,
      text: `The best coffee shop in town! The ambiance is perfect for both work and relaxation. Their cappuccino is absolutely divine.`,
      author: 'Michael Roberts',
    },
    {
      id: 3,
      text: `I’ve been coming here for years and the quality never disappoints. The pastries are freshly baked every morning.`,
      author: 'Emily Watson',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const next = () =>
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section
      ref={sectionRef}
      className="testimonials-section "
      style={{ backgroundImage: `url(${testimonialsBg})` }}
    >
      <div className="testimonials-overlay" />

      {/* Top Quote Cup */}
      <div className="testimonial-cup">
        <img src={quoteCup} alt="Quote cup" />
      </div>

      <div className="container">
        <div className={`testimonials-content fade-in ${isVisible ? 'visible' : ''}`}>
          <span className="testimonials-subheading">
            Customer Testimonials
          </span>

          <h2 className="testimonials-title">WHAT CUSTOMERS SAY?</h2>

          <p className="testimonial-text">
            “ {testimonials[currentIndex].text} ”
          </p>

          <p className="testimonial-author">
            – {testimonials[currentIndex].author} –
          </p>

          <div className="testimonial-nav">
            <button onClick={prev}>←</button>
            <button onClick={next}>→</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
