import { useEffect, useRef, useState } from 'react';
import { Coffee, Smile, CheckCircle } from 'lucide-react';
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

  useEffect(() => {
    if (!isVisible) return;

    const targetCoffee = 658;
    const targetSatisfaction = 4.4;
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
    'Carefully Selected Imported Coffee Beans',
    'Warm & Cozy Ambience',
    'Consistent Flavor in Every Cup',
  ];

  return (
    <section ref={sectionRef} className="section why-section-new">
      <div className="container">
        <div className="why-grid-new">

          {/* Content */}
          <div className={`why-content-new fade-in-left ${isVisible ? 'visible' : ''}`}>
            <span className="subheading" style={{ color: '#C5A480' }}>
              Why Choose Us
            </span>

            <h2>Crafting Exceptional Coffee Experiences</h2>

            <p>
              Welcome to Cafe Grano, a vibrant coffee destination in Jubilee Hills, Hyderabad.
              Previously known as Laffaire Cafe, we bring together carefully selected coffee
              beans, flavorful dishes, and a warm, cozy ambiance.
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

          {/* Stats */}
          <div className={`stats-card-new fade-in ${isVisible ? 'visible' : ''}`}>
            <div className="stat-item">
              <Coffee size={32} className="stat-icon" />
              <div className="stat-number">{coffeeCount}+</div>
              <div className="stat-label">Cup Coffee Every Day</div>
            </div>

            <div className="stat-divider"></div>

            <div className="stat-item">
              <Smile size={32} className="stat-icon" />
              <div className="stat-number">{satisfactionCount}⭐</div>
              <div className="stat-label">Ratings On Google</div>
            </div>
          </div>

          {/* Video Instead of Image */}
          <div className={`why-image-new fade-in-right ${isVisible ? 'visible' : ''}`}>
            <video
              src="/images/granovd.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="why-video"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;