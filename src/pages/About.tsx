import { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import aboutImage from '../assets/about-barista.jpg';
import whyImage from '../assets/why-choose-us.jpg';
import '../styles/pages.css';

const About = () => {
  const storyRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (storyRef.current) {
      observer.observe(storyRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero
          title="ABOUT US"
          subtitle="- Our Story -"
          description="Discover the passion and dedication behind every cup we serve."
          showButtons={false}
          isPageHero={true}
          backgroundImage={aboutImage}
        />

        {/* Story Section */}
        <section ref={storyRef} className="section about-page-story">
          <div className="container">
            <div className="story-grid">
              <div className={`story-content fade-in-left ${isVisible ? 'visible' : ''}`}>
                <span className="subheading">Our Story</span>
                <h2>FROM BEAN TO CUP, WITH LOVE</h2>
                <p>
                  Founded in 2003, Basilico Coffee started as a small family-owned
                  coffee shop with a simple mission: to serve the best coffee in town
                  while creating a warm, welcoming space for our community.
                </p>
                <p>
                  Over the years, we've grown from a single location to become a
                  beloved destination for coffee lovers. But our values remain the
                  same – quality ingredients, expert craftsmanship, and genuine
                  hospitality.
                </p>
                <p>
                  Every bean we use is ethically sourced and carefully roasted to
                  bring out its unique flavor profile. Our baristas are trained
                  extensively to ensure every cup meets our exacting standards.
                </p>
              </div>
              <div className={`story-image fade-in-right ${isVisible ? 'visible' : ''}`}>
                <img src={aboutImage} alt="Our barista at work" loading="lazy" />
                <div className="story-image-accent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section" style={{ backgroundColor: '#fff' }}>
          <div className="container">
            <div className="story-grid" style={{ flexDirection: 'row-reverse' }}>
              <div className="story-content fade-in-right visible">
                <span className="subheading">Our Values</span>
                <h2>WHAT MAKES US DIFFERENT</h2>
                <p>
                  We believe that great coffee is about more than just the drink –
                  it's about the experience. That's why we focus on:
                </p>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '16px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <span style={{ color: '#C5A480', fontWeight: 'bold' }}>✓</span>
                    <span><strong>Quality First:</strong> Only the finest beans and freshest ingredients</span>
                  </li>
                  <li style={{ marginBottom: '16px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <span style={{ color: '#C5A480', fontWeight: 'bold' }}>✓</span>
                    <span><strong>Community:</strong> A welcoming space for everyone</span>
                  </li>
                  <li style={{ marginBottom: '16px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <span style={{ color: '#C5A480', fontWeight: 'bold' }}>✓</span>
                    <span><strong>Sustainability:</strong> Eco-friendly practices throughout</span>
                  </li>
                  <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <span style={{ color: '#C5A480', fontWeight: 'bold' }}>✓</span>
                    <span><strong>Innovation:</strong> Always exploring new flavors and techniques</span>
                  </li>
                </ul>
              </div>
              <div className="story-image fade-in-left visible">
                <img src={whyImage} alt="Enjoying coffee" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        <CTASection
          title="Come Experience It Yourself"
          description="We'd love to welcome you to our coffee family."
        />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
};

export default About;
