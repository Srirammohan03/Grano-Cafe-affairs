import { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import MenuSection, { MenuItem } from '../components/MenuSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import OrderModal from '../components/OrderModal';
import heroImage from '../assets/category-coffee.jpg';

const Menu = () => {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const handleOrderClick = (item: MenuItem) => {
    setSelectedItem(item);
    setIsOrderModalOpen(true);
  };

  return (
    <>
      <Header />
      <main>
        <Hero
          title="OUR MENU"
          subtitle="- Explore Our Delicious Menu -"
          description="From premium coffees to freshly baked pastries, discover our carefully crafted offerings."
          showButtons={false}
          isPageHero={true}
          backgroundImage={heroImage}
        />
        <MenuSection  onOrderClick={handleOrderClick} />
        <CTASection
          title="Can't Decide? Visit Us!"
          description="Our friendly baristas will help you find the perfect drink."
          buttonText="Get Directions"
          buttonLink="/contact"
        />
      </main>
      <Footer />
      <BackToTop />
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        selectedItem={selectedItem}
      />
    </>
  );
};

export default Menu;
