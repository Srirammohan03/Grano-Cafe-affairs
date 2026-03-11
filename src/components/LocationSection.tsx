import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import locationImage from '/images/locationsec.jpg';
import '../styles/sections.css';

const LocationSection = () => {
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

  return (
    <section ref={sectionRef} className="location-section" style={{ padding: 0 }}>
      <div className="location-grid">
        {/* Image */}
        <div className={`location-image fade-in-left ${isVisible ? 'visible' : ''}`}>
          <img src={locationImage} alt="Coffee Time" loading="lazy" />
          <span className="location-text-overlay">Coffee Time</span>
        </div>

        {/* Info */}
        <div className={`location-info fade-in ${isVisible ? 'visible' : ''}`}>
          <span className="subheading">Location</span>
          <h2>How to Find Us?</h2>
          
          <div className="location-detail">
            <p className="location-label">Call Us Book A Table & Delivery:</p>
            <p className="location-phone">+91 96769 64871</p>
          </div>

          <div className="location-detail">
            <p className="location-label">Information Coffee House:</p>
            <p className="location-address">
              Road 63A & 64, Circle 18, Jubilee Hills, Hyderabad
            </p>
            <p className="location-email">granohyd@gmail.com</p>
            <p className="location-hours">
              <span>All Day</span> : 10:00 AM – 01:00 AM
            </p>
          </div>

          <Link to="https://maps.app.goo.gl/te3YRQa4X3we5o4u8" className="btn btn-primary">Get Directions</Link>
        </div>

        {/* Map */}
        <div className={`location-map fade-in-right ${isVisible ? 'visible' : ''}`}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.6747675080314!2d78.41108467462783!3d17.42738890165261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91866f263499%3A0xb472ea500896e982!2sGrano%20-%20Coffee%20Affairs!5e0!3m2!1sen!2sin!4v1773048904051!5m2!1sen!2sin"
            title="Location Map"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
