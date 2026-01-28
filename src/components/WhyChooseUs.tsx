import { useEffect, useRef, useState } from 'react';
import { Coffee, Smile, Play, CheckCircle } from 'lucide-react';
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
    <section ref={sectionRef} className="section section-dark why-section-new paper-cut-top paper-cut-bottom paper-cut-dark-top paper-cut-dark-bottom">
      <div className="container">
        <div className="why-grid-new">
          {/* Content - Left */}
          <div className={`why-content-new fade-in-left ${isVisible ? 'visible' : ''}`}>
            <span className="subheading" style={{ color: '#C5A480' }}>Why Choose Us</span>
            <h2>WE WANT YOU TO ENJOY THEIR COFFEE TO THE FULLEST</h2>
            <p>
              GRANO is a family owned and operated coffee shop which provides a small town
              experience with big city appeal. It's warm and friendly environment provides an
              excellent atmosphere to enjoy a great cup of coffee or sandwich, hang with friends.
            </p>
            <div className="why-features-new">
              {features.map((feature, index) => (
                <div key={index} className="why-feature-new">
                  <CheckCircle size={18} className="why-feature-icon-new" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Card - Center */}
          <div className={`stats-card-new fade-in ${isVisible ? 'visible' : ''}`}>
            <div className="stat-item">
              <Coffee size={32} className="stat-icon" />
              <div className="stat-number">{coffeeCount}+</div>
              <div className="stat-label">Cup Coffee Every Day</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <Smile size={32} className="stat-icon" />
              <div className="stat-number">{satisfactionCount}%</div>
              <div className="stat-label">Customer Satisfaction</div>
            </div>
          </div>

          {/* Image - Right */}
          <div className={`why-image-new fade-in-right ${isVisible ? 'visible' : ''}`}>
            <img src={whyImage} alt="Enjoying coffee" loading="lazy" />
            <button className="play-button-new" aria-label="Play video">
              <Play size={28} fill="currentColor" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
