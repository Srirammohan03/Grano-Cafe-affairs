import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import aboutImage from '/images/aboutsec.png';

// ✅ About section background image
import aboutBg from '../assets/about-bg-1.jpg';

import '../styles/sections.css';

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const hours = [
    { day: 'Monday', time: '10:00 AM – 01:00 AM ' },
    { day: 'Tuesday', time: '10:00 AM – 01:00 AM ' },
    { day: 'Wednesday', time: '10:00 AM – 01:00 AM ' },
    { day: 'Thursday', time: '10:00 AM – 01:00 AM ' },
    { day: 'Friday', time: '10:00 AM – 01:00 AM ' },
    { day: 'Saturday', time: '10:00 AM – 01:00 AM' },
    { day: 'Sunday', time: '10:00 AM – 01:00 AM', isClosed: false },
  ];

  return (
    <section
      ref={sectionRef}
      className="section about-section about-section-with-bg"
      style={{ backgroundImage: `url(${aboutBg})` }}
    >
      <div className="about-section-overlay" />

      <div className="container about-section-inner">
        <div className="about-grid">
          {/* Image */}
          <div className={`about-image fade-in-left ${isVisible ? 'visible' : ''}`}>
            <img src={aboutImage} alt="Barista making coffee" loading="lazy" />
          </div>

          {/* Content (NOW A ROUNDED CARD + LOWER POSITION) */}
          <div className={`about-content fade-in ${isVisible ? 'visible' : ''}`}>
            <span className="subheading about-subheading">Café in Jubilee Hills Since 2023</span>

            <h2>More Than Just Your Average Coffee Shop</h2>

            <p>
              Cafe Grano, nestled in the heart of Jubilee Hills, Hyderabad, is your go-to destination for amazing food and unique coffee
               fusions. Formerly known as Laffaire Cafe, we’ve embraced a fresh new identity while continuing our promise of unforgettable 
               culinary experiences. 
            </p>

            <p>
              From our signature coffee blends to flavorful dishes, every visit offers the perfect mix of 
              bold taste, cozy ambiance, and warm hospitality. Join us and discover how Cafe Grano turns every meal into a delightful memory.
            </p>

            <Link to="/menu" className="btn btn-primary about-cta">
              EXPLORE OUR MENU
            </Link>
          </div>

          {/* Hours Card */}
          <div className={`hours-wrap fade-in-right ${isVisible ? 'visible' : ''}`}>
            <div className="hours-card">
              <h3 className="hours-title">HOUR OPENING</h3>

              <div className="hours-list">
                {hours.map((item) => (
                  <div key={item.day} className="hours-item">
                    <span className="hours-day">{item.day}</span>
                    <span className={`hours-time ${item.isClosed ? 'hours-closed' : ''}`}>
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
