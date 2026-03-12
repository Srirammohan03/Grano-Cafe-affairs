import { useState } from 'react';
import '../styles/pages.css';

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
}

const CTASection = ({
  title = 'Ready to Experience Great Coffee?',
  description = 'Visit us today and discover why we are the favorite coffee spot in town.',
  buttonText = 'Book a Table',
}: CTASectionProps) => {

  const [showOrderPopup, setShowOrderPopup] = useState(false);

  return (
    <>
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">

            <h2>{title}</h2>
            <p>{description}</p>

            <button
              className="btn btn-outline"
              onClick={() => setShowOrderPopup(true)}
            >
              {buttonText}
            </button>

          </div>
        </div>
      </section>


      {/* ORDER POPUP */}
      {showOrderPopup && (
        <div className="order-popup-overlay">

          <div className="order-popup">

            <h3>Order From</h3>

            <div className="order-platforms">

              <a
                href="https://www.zomato.com/hyderabad/grano-coffee-affairs-jubilee-hills/order?v=o2"
                target="_blank"
                rel="noopener noreferrer"
                className="order-btn zomato"
              >
                Zomato
              </a>

              <a
                href="https://www.swiggy.com/city/hyderabad/grano-coffee-affairs-jubilee-hills-jubilee-hills-rest1057629?utm_source=GooglePlaceOrder&utm_campaign=GoogleMap&is_retargeting=true&media_source=GooglePlaceOrder"
                target="_blank"
                rel="noopener noreferrer"
                className="order-btn swiggy"
              >
                Swiggy
              </a>

            </div>

            <button
              className="order-close"
              onClick={() => setShowOrderPopup(false)}
            >
              Close
            </button>

          </div>

        </div>
      )}
    </>
  );
};

export default CTASection;