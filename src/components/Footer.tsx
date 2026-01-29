import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Send } from 'lucide-react';
import logo from '../assets/logo.png';
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
                <span className="footer-logo-text">GRANO</span>
              </div>
              <p>
                Welcome to GRANO Coffee House. We serve the finest artisan coffee 
                crafted with passion and dedication to quality.
              </p>
              <div className="footer-social">
                <a href="#" className="social-icon" aria-label="Facebook">
                  <Facebook size={18} />
                </a>
                <a href="#" className="social-icon" aria-label="Twitter">
                  <Twitter size={18} />
                </a>
                <a href="#" className="social-icon" aria-label="Instagram">
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
                  4517 Washington Ave.<br />
                  Manchester, Kentucky 39495, USA
                </p>
              </div>
              <div className="footer-contact-item">
                <p className="footer-contact-label">Book A Table:</p>
                <p className="footer-contact-value">
                  <a href="mailto:hello@granocoffee.com">hello@granocoffee.com</a>
                </p>
                <p className="footer-contact-value">
                  <a href="tel:7346651852">(734) 665-1852</a>
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="footer-section">
              <h3>Hour Open</h3>
              <div className="footer-hours-item">
                <span className="footer-hours-day">Monday – Friday:</span>
                <span className="footer-hours-time">9:00am – 22:00pm</span>
              </div>
              <div className="footer-hours-item">
                <span className="footer-hours-day">Saturday:</span>
                <span className="footer-hours-time">10:00am – 23:00pm</span>
              </div>
              <div className="footer-hours-item">
                <span className="footer-hours-day">Sunday:</span>
                <span className="footer-hours-time">5:00pm – 23:00pm</span>
              </div>
              <div className="footer-hours-item">
                <span className="footer-hours-day">Holidays:</span>
                <span className="footer-hours-time">Closed</span>
              </div>
              <div className="footer-hours-item">
                <span className="footer-hours-day">Happy Hours:</span>
                <span className="footer-hours-time">18:00pm – 20:00pm</span>
              </div>
            </div>

            {/* Newsletter */}
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
            </div>
          </div>

          {/* Bottom */}
          <div className="footer-bottom">
            {/* <button className="footer-coffee-icon" onClick={scrollToTop} aria-label="Scroll to top">
              ☕
            </button> */}
          </div>
          <p className="footer-copyright">
            © 2026 GRANO Coffee. All Rights Reserved. | Powered By Outright Creators
            {/* <Link to="/" onClick={scrollToTop}> Privacy Policy</Link> | 
            <Link to="/" onClick={scrollToTop}> Terms of Service</Link> */}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
