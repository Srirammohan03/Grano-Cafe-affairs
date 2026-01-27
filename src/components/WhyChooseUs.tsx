import { useEffect, useRef, useState } from 'react';
import whyImage from '../assets/why-choose-us.jpg';
import '../styles/sections.css';

const WhyChooseUs = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [coffeeCount, setCoffeeCount] = useState(0);
  const [satisfactionCount, setSatisfactionCount] = useState(0);

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

  // Animate counters when visible
  useEffect(() => {
    if (!isVisible) return;

    const targetCoffee = 658;
    const targetSatisfaction = 98;
    const duration = 2000;
    const steps = 60;
    const intervalTime = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      setCoffeeCount(Math.floor((step / steps) * targetCoffee));
      setSatisfactionCount(Math.floor((step / steps) * targetSatisfaction));

      if (step >= steps) {
        clearInterval(timer);
        setCoffeeCount(targetCoffee);
        setSatisfactionCount(targetSatisfaction);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isVisible]);

  const features = [
    'Imported Coffee and Quality Control',
    'Cozy Space to Enjoy and Relax',
    "Make Sure the Coffee Taste Doesn't Change",
  ];

  return (
    <section ref={sectionRef} className="section section-dark why-section paper-cut-top paper-cut-bottom paper-cut-dark-top paper-cut-dark-bottom">
      <div className="container">
        <div className="why-grid">
          {/* Content */}
          <div className={`why-content fade-in-left ${isVisible ? 'visible' : ''}`}>
            <span className="subheading" style={{ color: '#C5A480' }}>Why Choose Us</span>
            <h2>WE WANT YOU TO ENJOY THEIR COFFEE TO THE FULLEST</h2>
            <p>
              Vertical is a family owned and operated coffee shop which provides a small town
              experience with big city appeal. It's warm and friendly environment provides an
              excellent atmosphere to enjoy a great cup of coffee or sandwich, hang with friends.
            </p>
            <div className="why-features">
              {features.map((feature, index) => (
                <div key={index} className="why-feature">
                  <span className="why-feature-icon">✓</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className={`why-visual fade-in-right ${isVisible ? 'visible' : ''}`}>
            {/* Stats Card */}
            <div className="stats-card">
              <div className="stats-icon">☕</div>
              <div className="stats-number">{coffeeCount}+</div>
              <div className="stats-label">Cup Coffee Every Day</div>
              <div className="stats-divider"></div>
              <div className="stats-icon">😊</div>
              <div className="stats-number">{satisfactionCount}%</div>
              <div className="stats-label">Customer Satisfaction</div>
            </div>

            {/* Image */}
            <div className="why-image">
              <img src={whyImage} alt="Enjoying coffee" loading="lazy" />
              <div className="play-button" aria-label="Play video"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
