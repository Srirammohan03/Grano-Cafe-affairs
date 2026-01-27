import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import aboutImage from '../assets/about-barista.jpg';
import '../styles/sections.css';

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const hours = [
    { day: 'Monday', time: '7:00 - 21:00' },
    { day: 'Tuesday', time: '7:00 - 21:00' },
    { day: 'Wednesday', time: '7:00 - 21:00' },
    { day: 'Thursday', time: '7:00 - 21:00' },
    { day: 'Friday', time: '8:00 - 21:00' },
    { day: 'Saturday', time: '7:00 - 22:00' },
    { day: 'Sunday', time: 'CLOSED', isClosed: true },
  ];

  return (
    <section ref={sectionRef} className="section about-section">
      <div className="container">
        <div className="about-grid">
          {/* Image */}
          <div className={`about-image fade-in-left ${isVisible ? 'visible' : ''}`}>
            <img src={aboutImage} alt="Barista making coffee" loading="lazy" />
          </div>

          {/* Content */}
          <div className={`about-content fade-in ${isVisible ? 'visible' : ''}`}>
            <span className="subheading">Coffee Shop Since 2003</span>
            <h2>WE ARE NOT YOUR AVERAGE COFFEE SHOP</h2>
            <p>
              We offer some of the best locally roasted coffee using "Brazilian Santos" beans.
              Enjoy Dark, Blonde, Jamaican, Italian & Decaf roasts. Also available are our
              specialty Lattes, Frappes, Mochas, Cappuccinos, Americanos & more...
            </p>
            <p>
              To see more of our coffee, specialty drinks & food menus, please click the link
              below. There are many variations of passages available but the majority have
              suffered alteration in some form by injected.
            </p>
            <Link to="/about" className="btn btn-primary">Click To Read More</Link>
          </div>

          {/* Hours Card */}
          <div className={`hours-card fade-in-right ${isVisible ? 'visible' : ''}`}>
            <h3 className="hours-title">Hour Opening</h3>
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
    </section>
  );
};

export default AboutSection;
