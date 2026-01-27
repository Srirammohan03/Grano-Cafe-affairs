import { useEffect, useRef, useState } from 'react';
import MenuCard from './MenuCard';
import cappuccino from '../assets/menu-cappuccino.jpg';
import icedLatte from '../assets/menu-iced-latte.jpg';
import espresso from '../assets/menu-espresso.jpg';
import mocha from '../assets/menu-mocha.jpg';
import croissant from '../assets/menu-croissant.jpg';
import avocadoToast from '../assets/menu-avocado-toast.jpg';
import '../styles/menu.css';

export interface MenuItem {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
  category: string;
  badge?: string;
}

interface MenuSectionProps {
  showTabs?: boolean;
  limit?: number;
  onOrderClick: (item: MenuItem) => void;
}

const MenuSection = ({ showTabs = false, limit, onOrderClick }: MenuSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  const menuItems: MenuItem[] = [
    {
      id: '1',
      name: 'Classic Cappuccino',
      price: '$4.50',
      description: 'Rich espresso with steamed milk and a thick layer of foam, topped with cocoa powder.',
      image: cappuccino,
      category: 'coffee',
      badge: 'Popular',
    },
    {
      id: '2',
      name: 'Iced Vanilla Latte',
      price: '$5.25',
      description: 'Smooth espresso with cold milk and vanilla syrup, served over ice with whipped cream.',
      image: icedLatte,
      category: 'coffee',
    },
    {
      id: '3',
      name: 'Double Espresso',
      price: '$3.50',
      description: 'Two shots of our signature espresso blend, bold and full-bodied flavor.',
      image: espresso,
      category: 'coffee',
    },
    {
      id: '4',
      name: 'Chocolate Mocha',
      price: '$5.75',
      description: 'Espresso blended with rich chocolate and steamed milk, topped with whipped cream.',
      image: mocha,
      category: 'coffee',
      badge: 'New',
    },
    {
      id: '5',
      name: 'Butter Croissant',
      price: '$3.25',
      description: 'Flaky, buttery French croissant baked fresh every morning. Perfect with coffee.',
      image: croissant,
      category: 'bakery',
    },
    {
      id: '6',
      name: 'Avocado Toast',
      price: '$8.50',
      description: 'Smashed avocado on artisan sourdough with poached egg, herbs, and chili flakes.',
      image: avocadoToast,
      category: 'breakfast',
      badge: 'Chef Pick',
    },
  ];

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'coffee', label: 'Coffee' },
    { id: 'bakery', label: 'Bakery' },
    { id: 'breakfast', label: 'Breakfast' },
  ];

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

  const filteredItems = activeCategory === 'all'
    ? menuItems
    : menuItems.filter((item) => item.category === activeCategory);

  const displayItems = limit ? filteredItems.slice(0, limit) : filteredItems;

  return (
    <section ref={sectionRef} className="section menu-section">
      <div className="container">
        <div className={`menu-header fade-in ${isVisible ? 'visible' : ''}`}>
          <span className="subheading">Explore Our Menu</span>
          <h2>DELICIOUS MENU FOR YOU</h2>
          
          {showTabs && (
            <div className="menu-tabs">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`menu-tab ${activeCategory === category.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.label}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="menu-grid">
          {displayItems.map((item, index) => (
            <MenuCard
              key={item.id}
              item={item}
              isVisible={isVisible}
              delay={index * 0.1}
              onOrderClick={onOrderClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
