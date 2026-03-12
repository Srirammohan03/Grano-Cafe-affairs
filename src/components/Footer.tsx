import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Send } from 'lucide-react';
import logo from '/images/creamlogograno.png';
import '../styles/footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);

  const handleNewsletterSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email && agreed) {
      alert('Thank you for subscribing!');
      setEmail('');
      setAgreed(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      {/* <div className="footer-paper-cut"></div> */}
      <div className="container">
        <div className="footer-content">
          <div className="footer-grid">
            {/* Brand */}
            <div className="footer-brand">
              <div className="footer-logo">
                <img src={logo} alt="GRANO Coffee" />
              </div>
              <p>
                Welcome to Cafe Grano, where every cup of coffee is crafted with passion. 
                Enjoy a cozy space filled with great flavors, warm vibes, and unforgettable moments.
              </p>
              <div className="footer-social">
                <a href="https://www.facebook.com/profile.php?id=61587227054505" className="social-icon" aria-label="Facebook" target='_blank'>
                  <Facebook size={18} />
                </a>
                {/* <a href="#" className="social-icon" aria-label="Twitter">
                  <Twitter size={18} />
                </a> */}
                <a href="https://www.instagram.com/granohyd" className="social-icon" aria-label="Instagram" target='_blank'>
                  <Instagram size={18} />
                </a>
              </div>
            </div>

            {/* Contact */}
            <div className="footer-section">
              <h3>Contact Us</h3>
              <div className="footer-contact-item">
                <p className="footer-contact-label">Location:</p>
                <p className="footer-contact-value">
                  Road 63A & 64, Circle 18,<br />
                   Jubilee Hills, Hyderabad
                </p>
              </div>
              <div className="footer-contact-item">
                <p className="footer-contact-label">Book A Table:</p>
                <p className="footer-contact-value">
                  <a href="mailto:granohyd@gmail.com">granohyd@gmail.com</a>
                </p>
                <p className="footer-contact-value">
                  <a href="tel:9676964871">+91 96769 64871</a>
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="footer-section">
              <h3>Hour Open</h3>
              <div className="footer-hours-item">
                <span className="footer-hours-day">Mon - Fri</span>
                <span className="footer-hours-time">10:00 AM – 01:00 AM</span>
              </div>
              <div className="footer-hours-item">
                <span className="footer-hours-day">Saturday:</span>
                <span className="footer-hours-time">10:00 AM – 01:00 AM</span>
              </div>
              <div className="footer-hours-item">
                <span className="footer-hours-day">Sunday:</span>
                <span className="footer-hours-time">09:00 AM – 01:00 AM</span>
              </div>
              <div className="footer-hours-item">
                <span className="footer-hours-day">Holidays:</span>
                <span className="footer-hours-time">09:00 AM – 01:00 AM</span>
              </div>
              {/* <div className="footer-hours-item">
                <span className="footer-hours-day">Happy Hours:</span>
                <span className="footer-hours-time">18:00pm – 20:00pm</span>
              </div> */}
            </div>

            {/* Newsletter
            <div className="footer-section footer-newsletter">
              <h3>Newsletters & Event</h3>
              <p>
                Register your email to not miss any news and offers from us
              </p>
              <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
                <div className="newsletter-input-wrapper">
                  <input
                    type="email"
                    className="newsletter-input"
                    placeholder="Email address..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button type="submit" className="newsletter-btn" aria-label="Subscribe">
                    <Send size={18} />
                  </button>
                </div>
                <label className="newsletter-checkbox">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    required
                  />
                  I agree to the Privacy Policy
                </label>
              </form>
            </div> */}
            <div className="footer-section footer-newsletter">
              <h3>Our Menu</h3>
  {/* <p>Explore our delicious selections crafted with fresh ingredients</p> */}

  <ul className="footer-menu-list">
    <li>Breakfast</li>
    <li>Gourmet Fries</li>
    <li>Smokey Die Pizzas</li>
    <li>Main On Your Plate</li>
    <li>Special Coffee</li>
    {/* <li>Tea Pots</li> */}
    <li>Appetizers</li>
  </ul>
            </div> 
          </div>

          {/* Bottom */}
          <div className="footer-bottom">
            {/* <button className="footer-coffee-icon" onClick={scrollToTop} aria-label="Scroll to top">
              ☕
            </button> */}
          </div>
          <p className="footer-copyright">
            © 2026 Grano - Coffee Affairs. All Rights Reserved. | Powered By Outright Creators
            {/* <Link to="/" onClick={scrollToTop}> Privacy Policy</Link> | 
            <Link to="/" onClick={scrollToTop}> Terms of Service</Link> */}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
