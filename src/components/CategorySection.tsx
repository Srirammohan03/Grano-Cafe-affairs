// src/components/CategorySection.tsx
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import coffeeImage from '../assets/category-coffee.jpg';
import bakeryImage from '../assets/category-bakery.jpg';
import breakfastImage from '../assets/category-breakfast.jpg';

// ✅ icon images
import coffeeIcon from '../assets/icons/Cappuccino.webp';
import bakeryIcon from '../assets/icons/bakery-grano.png';
import breakfastIcon from '../assets/icons/breakfast.png';

import '../styles/sections.css';

interface Category {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: string; // now this is image path
}

const TiltCard = ({ category, index, isVisible }: { category: Category, index: number, isVisible: boolean }) => {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [tiltStyle, setTiltStyle] = useState({});
  const [glareStyle, setGlareStyle] = useState<React.CSSProperties>({ opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left; 
    const y = e.clientY - rect.top;  

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Max rotation is 15deg
    const rotateX = -((y - centerY) / centerY) * 12;
    const rotateY = ((x - centerX) / centerX) * 12;

    setTiltStyle({
      transform: `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`,
      transition: 'transform 0.1s ease-out',
      zIndex: 10
    });

    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;
    
    setGlareStyle({
      background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 60%)`,
      opacity: 1,
      transition: 'opacity 0.2s ease-in'
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTiltStyle({
      transform: 'perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
      zIndex: 1
    });
    setGlareStyle({ opacity: 0, transition: 'opacity 0.6s ease-out' });
  };

  return (
    <Link
      ref={cardRef}
      to="/menu"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`category-card scale-in ${isVisible ? 'visible' : ''}`}
      style={{ 
        ...tiltStyle, 
        transformStyle: 'preserve-3d',
        transitionDelay: (!isHovered && isVisible) ? `${index * 0.15}s` : '0s',
      }}
    >
      <div className="category-card-bg" style={{ transform: 'translateZ(-10px)' }}>
        <img src={category.image} alt={category.title} loading="lazy" />
      </div>

      <div className="category-card-overlay"></div>

      {/* The glare effect on top of everything but under content */}
      <div 
        className="absolute inset-0 pointer-events-none mix-blend-overlay z-10"
        style={glareStyle}
      ></div>

      <div className="category-card-content" style={{ transform: 'translateZ(40px)', transformStyle: 'preserve-3d' }}>
        {/* Animated icon with floating effect and 3d pop */}
        <div style={{ transform: 'translateZ(30px)' }}>
          <img
            src={category.icon}
            alt={`${category.title} icon`}
            className={`category-icon transition-transform duration-700 ${isHovered ? 'animate-bounce drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]' : ''}`}
          />
        </div>

        <h3 className="category-title" style={{ transform: 'translateZ(20px)' }}>- {category.title} -</h3>
        
        <p className={`category-description transition-all duration-500 delay-100 ${isHovered ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-4'}`} style={{ transform: 'translateZ(10px)' }}>
          {category.description}
        </p>
      </div>
    </Link>
  );
};

const CategorySection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const categories: Category[] = [
    {
      id: 'coffee',
      title: 'Coffee',
      description:
        'Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei an pericula.',
      image: coffeeImage,
      icon: coffeeIcon,
    },
    {
      id: 'bakery',
      title: 'Bakery',
      description:
        'Fresh baked goods made daily with premium ingredients. From croissants to artisan bread.',
      image: bakeryImage,
      icon: bakeryIcon,
    },
    {
      id: 'breakfast',
      title: 'Breakfast',
      description:
        'Start your day right with our delicious breakfast options. From eggs to pancakes.',
      image: breakfastImage,
      icon: breakfastIcon,
    },
  ];

  return (
    <section ref={sectionRef} className="section category-section overflow-visible">
      <div className="container relative z-10">
        <div className="category-grid">
          {categories.map((category, index) => (
            <TiltCard key={category.id} category={category} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
