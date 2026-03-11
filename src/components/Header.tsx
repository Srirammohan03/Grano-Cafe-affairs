import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Search,
  ShoppingBag,
  Menu,
  X,
  Phone,
  MapPin,
  ChevronDown,
} from "lucide-react";
import logo from "/images/creamlogograno.png"; // Ensure this path is correct
import "../styles/header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      // Trigger scroll effect slightly earlier for smoother transition
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const original = document.body.style.overflow;

    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = original || "";
    }

    return () => {
      document.body.style.overflow = original || "";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { path: "/", label: "HOME" },
    { path: "/menu", label: "MENU" },
    { path: "/about", label: "ABOUT" },
    // { path: "/events", label: "EVENTS" },
    { path: "/contact", label: "CONTACT" },
  ];

  return (
    <>
      <header className={`header ${isScrolled ? "scrolled" : ""}`}>
        {/* === TOP INFO BAR (Collapses on scroll) === */}
        <div className="top-bar">
          <div className="container">
            <div className="top-bar-content">
               
      <div className="top-bar-item">
  <a
    href="https://maps.app.goo.gl/H6F6feSL1B4xSzhw9"
    target="_blank"
    rel="noopener noreferrer"
    className="top-bar-link"
  >
    <div className="top-bar-icon">
      <MapPin size={16} fill="currentColor" />
    </div>

    <div className="top-bar-text">
      <span className="top-bar-label">VISIT US</span>
      <span className="top-bar-value">
        Road 63A & 64, Circle 18, Jubilee Hills, Hyderabad
      </span>
    </div>
  </a>
</div>

<div className="top-bar-item right-align">
  <a
    href="tel:+919676964871"
    className="top-bar-link"
  >
    <div className="top-bar-text right-align">
      <span className="top-bar-label">CALL US</span>
      <span className="top-bar-value">+91 96769 64871</span>
    </div>

    <div className="top-bar-icon">
      <Phone size={16} fill="currentColor" />
    </div>
  </a>
</div>
                

            </div>
          </div>
        </div>

        {/* === MAIN NAVIGATION === */}
        <div className="main-nav-wrapper">
          <nav className="main-nav container">
            <div className="container">
              <div className="nav-inner">
                {/* Mobile Hamburger (Left) */}
                <button
                  className="menu-toggle"
                  onClick={() => setIsMobileMenuOpen(true)}
                  aria-label="Open menu"
                >
                  <Menu size={28} />
                </button>

                {/* Desktop Left Links */}
                <ul className="nav-links left">
                  {navLinks.slice(0, 2).map((link) => (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        className={
                          location.pathname === link.path ? "active" : ""
                        }
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* Center Logo */}
                <Link to="/" className="nav-logo">
                  <div className="logo-circle">
                    <img src={logo} alt="Grano Cafe" />
                  </div>
                </Link>

                {/* Right Section (Links + Icons) */}
                <div className="right-section">
                  <ul className="nav-links right">
                    {navLinks.slice(2).map((link) => (
                      <li key={link.path}>
                        <Link
                          to={link.path}
                          className={
                            location.pathname === link.path ? "active" : ""
                          }
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  {/* <div className="nav-actions">
                    <button
                      className="action-btn desktop-search"
                      aria-label="Search"
                    >
                      <Search size={22} />
                    </button>
                    <button className="action-btn cart-btn" aria-label="Cart">
                      <ShoppingBag size={22} />
                      <span className="cart-badge">0</span>
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* === MOBILE FULL SCREEN OVERLAY === */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? "open" : ""}`}>
        {/* Close Button (Top Right) */}
        <button
          className="mobile-close-btn"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label="Close menu"
        >
          <X size={20} />
        </button>

        <div className="mobile-menu-container">
          {/* Search Bar matching the image */}
          {/* <div className="mobile-search-bar">
            <input type="text" placeholder="Enter Keywords..." />
            <button className="mobile-search-btn">
              <Search size={18} />
            </button>
          </div> */}

          {/* Navigation Links */}
          <ul className="mobile-nav-list">
            {navLinks.map((link, index) => (
              <li
                key={link.path}
                style={{ animationDelay: `${index * 0.1}s` }} // Staggered animation
              >
                <div className="mobile-link-wrapper">
                  <Link
                    to={link.path}
                    className={location.pathname === link.path ? "active" : ""}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                  {/* Visual chevron to match the design implies dropdowns */}
                  <ChevronDown className="mobile-chevron" size={16} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
