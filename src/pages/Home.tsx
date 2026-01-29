import { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import CategorySection from '../components/CategorySection';
import WhyChooseUs from '../components/WhyChooseUs';
import EventsSection from '../components/EventsSection';
import MenuSection, { MenuItem } from '../components/MenuSection';
import TestimonialsSection from '../components/TestimonialsSection';
import LocationSection from '../components/LocationSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import OrderModal from '../components/OrderModal';

const Home = () => {
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
        <Hero />
        <AboutSection />
        <CategorySection />
        <MenuSection limit={6} onOrderClick={handleOrderClick} />
        <WhyChooseUs />
        <EventsSection />
        <TestimonialsSection />
        <LocationSection />
        {/* <CTASection /> */}
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

export default Home;
