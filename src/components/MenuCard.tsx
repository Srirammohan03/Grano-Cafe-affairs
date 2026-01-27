import { MenuItem } from './MenuSection';
import '../styles/menu.css';

interface MenuCardProps {
  item: MenuItem;
  isVisible: boolean;
  delay: number;
  onOrderClick: (item: MenuItem) => void;
}

const MenuCard = ({ item, isVisible, delay, onOrderClick }: MenuCardProps) => {
  return (
    <div
      className={`menu-card fade-in ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="menu-card-image image-zoom">
        <img src={item.image} alt={item.name} loading="lazy" />
        {item.badge && <span className="menu-card-badge">{item.badge}</span>}
      </div>
      <div className="menu-card-content">
        <div className="menu-card-header">
          <h3 className="menu-card-title">{item.name}</h3>
          <span className="menu-card-price">{item.price}</span>
        </div>
        <p className="menu-card-description">{item.description}</p>
        <button
          className="menu-card-btn"
          onClick={() => onOrderClick(item)}
        >
          Order Now
        </button>
      </div>
    </div>
  );
};

export default MenuCard;
