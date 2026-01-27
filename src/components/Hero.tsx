import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero-coffee.jpg';
import '../styles/hero.css';

interface HeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  showButtons?: boolean;
  isPageHero?: boolean;
  backgroundImage?: string;
}

const Hero = ({
  title = 'OUR PASSION IS IN OUR COFFEE',
  subtitle = '- Welcome to Basilico Coffee Shop -',
  description = 'Basilico Coffee is the perfect spot in Sydney to celebrate a special occasion or to simply head out for a bite to eat.',
  showButtons = true,
  isPageHero = false,
  backgroundImage,
}: HeroProps) => {
  const [displayedTitle, setDisplayedTitle] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const titleRef = useRef(title);

  useEffect(() => {
    titleRef.current = title;
    setDisplayedTitle('');
    setIsTyping(true);

    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= titleRef.current.length) {
        setDisplayedTitle(titleRef.current.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [title]);

  return (
    <section className={`hero ${isPageHero ? 'hero-page' : ''}`}>
      <div className="hero-background">
        <img
          src={backgroundImage || heroImage}
          alt="Coffee Shop"
          loading="eager"
          fetchPriority="high"
        />
      </div>
      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        <p className="hero-welcome">{subtitle}</p>
        <h1 className="hero-title">
          <span className="typewriter">
            <span className={`typewriter-text ${!isTyping ? 'done' : ''}`}>
              {displayedTitle}
            </span>
          </span>
        </h1>
        <p className="hero-description">{description}</p>
        
        {showButtons && (
          <div className="hero-buttons">
            <Link to="/menu" className="btn btn-primary">View All Menu</Link>
            <Link to="/contact" className="btn btn-outline">Book A Table</Link>
          </div>
        )}
      </div>

      {!isPageHero && (
        <div className="coffee-drops">
          <div className="coffee-drop"></div>
          <div className="coffee-drop"></div>
          <div className="coffee-drop"></div>
        </div>
      )}
    </section>
  );
};

export default Hero;
