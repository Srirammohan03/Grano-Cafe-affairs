import { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import aboutImage from '/images/about.jpg';
import whyImage from '/images/abt.jpg';
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
                  Cafe Grano, located in the vibrant neighborhood of Jubilee Hills, Hyderabad, is a place where coffee, food,
                   and great moments come together. Formerly known as Laffaire Cafe, we embraced a new identity as 
                  Cafe Grano while continuing our passion for serving exceptional coffee and delicious dishes in a warm and welcoming space.
                </p>
                <p>
                  What started as a cozy cafe has grown into a favorite destination for coffee lovers, friends, and families. 
                  Whether you're stopping by for your morning coffee, catching up with friends, 
                  or enjoying a relaxing evening, Cafe Grano offers the perfect blend of flavor, comfort, and hospitality.
                </p>
                <p>
                 Every cup we serve is crafted with carefully selected coffee beans and attention to detail. 
                 Our team is dedicated to delivering quality, consistency, and an experience that keeps you coming back.
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
                <h2>WHAT MAKES CAFE GRANO SPECIAL</h2>
                <p>
                  At Cafe Grano, we believe coffee is more than just a drink — it’s an experience meant to be enjoyed and shared.
                </p>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '16px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <span style={{ color: '#C5A480', fontWeight: 'bold' }}>✓</span>
                    <span><strong>Quality First:</strong> Premium coffee beans and fresh ingredients in every cup and dish.</span>
                  </li>
                  <li style={{ marginBottom: '16px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <span style={{ color: '#C5A480', fontWeight: 'bold' }}>✓</span>
                    <span><strong>Warm Ambience:</strong> A cozy space where friends, families, and colleagues can relax and connect.</span>
                  </li>
                  <li style={{ marginBottom: '16px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <span style={{ color: '#C5A480', fontWeight: 'bold' }}>✓</span>
                    <span><strong>Passion for Coffee:</strong> Every cup is prepared with care by skilled baristas.</span>
                  </li>
                  <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <span style={{ color: '#C5A480', fontWeight: 'bold' }}>✓</span>
                    <span><strong>Memorable Experiences:</strong> From casual meetups to special moments, we create a welcoming place for everyone.</span>
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
