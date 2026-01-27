import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import locationImage from '../assets/location-image.jpg';
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
          <h2>HOW TO FIND US?</h2>
          
          <div className="location-detail">
            <p className="location-label">Call Us Book A Table & Delivery:</p>
            <p className="location-phone">(734) 665-1852</p>
          </div>

          <div className="location-detail">
            <p className="location-label">Information Coffee House:</p>
            <p className="location-address">
              4517 Washington Ave. Manchester, Kentucky 39495, USA
            </p>
            <p className="location-email">basilicofood123@gmail.com</p>
            <p className="location-hours">
              Mon – <span>Fri</span> : 9:00am – 22:00pm, Holidays : Close
            </p>
          </div>

          <Link to="/contact" className="btn btn-primary">Get Directions</Link>
        </div>

        {/* Map */}
        <div className={`location-map fade-in-right ${isVisible ? 'visible' : ''}`}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.5419527813396!2d-0.1195680841619799!3d51.50330697963432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2sLondon%20Eye!5e0!3m2!1sen!2suk!4v1625123456789!5m2!1sen!2suk"
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
