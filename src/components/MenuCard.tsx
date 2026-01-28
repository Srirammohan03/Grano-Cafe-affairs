import { MenuItem } from './MenuSection';
import { ShoppingCart } from 'lucide-react';
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
      className={`menu-card-new fade-in ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="menu-card-image-wrapper">
        <img src={item.image} alt={item.name} loading="lazy" />
        {item.badge && <span className="menu-card-badge">{item.badge}</span>}
        <button
          className="menu-card-order-btn"
          onClick={() => onOrderClick(item)}
          aria-label={`Order ${item.name}`}
        >
          <ShoppingCart size={18} />
        </button>
      </div>
      <div className="menu-card-info">
        <div className="menu-card-header">
          <h3 className="menu-card-name">{item.name}</h3>
          <span className="menu-card-price">{item.price}</span>
        </div>
        <p className="menu-card-desc">{item.description}</p>
      </div>
    </div>
  );
};

export default MenuCard;
