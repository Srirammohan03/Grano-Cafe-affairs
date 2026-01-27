import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import coffeeImage from '../assets/category-coffee.jpg';
import bakeryImage from '../assets/category-bakery.jpg';
import breakfastImage from '../assets/category-breakfast.jpg';
import '../styles/sections.css';

interface Category {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: string;
}

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
      description: 'Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei an pericula. Eos ei nisl graecis, vix aperiri.',
      image: coffeeImage,
      icon: '☕',
    },
    {
      id: 'bakery',
      title: 'Bakery',
      description: 'Fresh baked goods made daily with premium ingredients. From croissants to artisan bread, we have it all.',
      image: bakeryImage,
      icon: '🥐',
    },
    {
      id: 'breakfast',
      title: 'Breakfast',
      description: 'Start your day right with our delicious breakfast options. From eggs to pancakes, freshly prepared.',
      image: breakfastImage,
      icon: '🍳',
    },
  ];

  return (
    <section ref={sectionRef} className="section category-section">
      <div className="container">
        <div className="category-grid">
          {categories.map((category, index) => (
            <Link
              to="/menu"
              key={category.id}
              className={`category-card scale-in ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="category-card-bg">
                <img src={category.image} alt={category.title} loading="lazy" />
              </div>
              <div className="category-card-overlay"></div>
              <div className="category-card-content">
                <span className="category-icon">{category.icon}</span>
                <h3 className="category-title">- {category.title} -</h3>
                <p className="category-description">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
