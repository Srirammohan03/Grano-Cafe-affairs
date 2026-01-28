import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';
import '../styles/header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    // Scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/menu', label: 'Menu' },
    { path: '/about', label: 'About' },
    { path: '/events', label: 'Events' },
    { path: '/contact', label: 'Contact' },
  ];

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-content">
            <div className="top-bar-item">
              <div className="top-bar-icon">📍</div>
              <div className="top-bar-text">
                <span className="top-bar-label">Location</span>
                <span className="top-bar-value">448 West Foxrun St. Bronx, NY 10472</span>
              </div>
            </div>
            <div className="top-bar-item">
              <div className="top-bar-text" style={{ textAlign: 'right' }}>
                <span className="top-bar-label">Call Delivery</span>
                <span className="top-bar-value">(734) 665-1852 or (770) 942-7739</span>
              </div>
              <div className="top-bar-icon">📞</div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="container">
        <nav className="header-nav">
          <div className="nav-wrapper">
            {/* Mobile Menu Toggle */}
            <button
              className={`menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Navigation Links - Left */}
            <ul className={`nav-links nav-links-left ${isMobileMenuOpen ? 'active' : ''}`}>
              {navLinks.slice(0, 2).map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                    onClick={handleNavClick}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Center Logo */}
            <Link to="/" className="nav-logo" onClick={handleNavClick}>
              <img src={logo} alt="GRANO Coffee" loading="eager" />
              <span className="logo-text">GRANO</span>
            </Link>

            {/* Navigation Links - Right */}
            <ul className={`nav-links nav-links-right ${isMobileMenuOpen ? 'active' : ''}`}>
              {navLinks.slice(2).map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                    onClick={handleNavClick}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Nav Actions */}
            <div className="nav-actions">
              <button className="nav-action-btn" aria-label="Search">
                <Search size={20} />
              </button>
              <button className="nav-action-btn cart-btn" aria-label="Cart">
                <ShoppingBag size={20} />
                <span className="cart-badge">0</span>
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}>
        <ul className="mobile-nav-links">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  handleNavClick();
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
