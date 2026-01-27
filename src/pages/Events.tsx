import { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import eventsOutdoor from '../assets/events-outdoor.jpg';
import eventsCoffee from '../assets/events-coffee.jpg';
import '../styles/pages.css';

interface TimelineItem {
  time: string;
  title: string;
  description: string;
}

const Events = () => {
  const descRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLElement>(null);
  const [isDescVisible, setIsDescVisible] = useState(false);
  const [isTimelineVisible, setIsTimelineVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === descRef.current) {
              setIsDescVisible(true);
            }
            if (entry.target === timelineRef.current) {
              setIsTimelineVisible(true);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    if (descRef.current) observer.observe(descRef.current);
    if (timelineRef.current) observer.observe(timelineRef.current);

    return () => observer.disconnect();
  }, []);

  const timelineItems: TimelineItem[] = [
    {
      time: '9:00 AM',
      title: 'Morning Coffee Tasting',
      description: 'Start your day with our curated selection of single-origin coffees.',
    },
    {
      time: '11:00 AM',
      title: 'Latte Art Workshop',
      description: 'Learn the art of creating beautiful latte designs from our expert baristas.',
    },
    {
      time: '2:00 PM',
      title: 'Coffee Bean Roasting Demo',
      description: 'Watch and learn as we demonstrate our small-batch roasting process.',
    },
    {
      time: '5:00 PM',
      title: 'Happy Hour & Live Music',
      description: 'Enjoy special drinks and local musicians in our cozy evening atmosphere.',
    },
  ];

  return (
    <>
      <Header />
      <main>
        <Hero
          title="EVENTS & GATHERINGS"
          subtitle="- Host Your Special Moments -"
          description="From intimate gatherings to corporate events, we have the perfect space for you."
          showButtons={false}
          isPageHero={true}
          backgroundImage={eventsOutdoor}
        />

        {/* Description Section */}
        <section ref={descRef} className="section events-description">
          <div className="container">
            <div className={`events-description-content fade-in ${isDescVisible ? 'visible' : ''}`}>
              <span className="subheading" style={{ justifyContent: 'center' }}>Private Events</span>
              <h2>THE PERFECT VENUE FOR YOUR OCCASION</h2>
              <p>
                Whether you're planning a birthday celebration, a corporate meeting, or a casual
                get-together with friends, Basilico Coffee offers the ideal setting. Our warm
                ambiance, exceptional coffee, and dedicated staff ensure your event is memorable.
              </p>
              <p style={{ marginTop: '16px' }}>
                We offer customizable packages to suit your needs, from intimate gatherings of 10
                to private buyouts for up to 60 guests. Contact us to discuss your vision.
              </p>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section ref={timelineRef} className="section timeline-section">
          <div className="container">
            <div className="text-center mb-5">
              <span className="subheading" style={{ justifyContent: 'center' }}>Sample Event Schedule</span>
              <h2>A DAY AT BASILICO</h2>
            </div>

            <div className="timeline">
              {timelineItems.map((item, index) => (
                <div
                  key={index}
                  className={`timeline-item fade-in ${isTimelineVisible ? 'visible' : ''}`}
                  style={{ transitionDelay: `${index * 0.2}s` }}
                >
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <span className="timeline-time">{item.time}</span>
                    <h3 className="timeline-title">{item.title}</h3>
                    <p className="timeline-description">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Strip */}
        <div className="gallery-strip">
          <div className="gallery-strip-item">
            <img src={eventsOutdoor} alt="Event 1" loading="lazy" />
          </div>
          <div className="gallery-strip-item">
            <img src={eventsCoffee} alt="Event 2" loading="lazy" />
          </div>
          <div className="gallery-strip-item">
            <img src={eventsOutdoor} alt="Event 3" loading="lazy" />
          </div>
          <div className="gallery-strip-item">
            <img src={eventsCoffee} alt="Event 4" loading="lazy" />
          </div>
        </div>

        <CTASection
          title="Ready to Plan Your Event?"
          description="Contact us today to discuss your requirements and book your date."
          buttonText="Schedule An Event"
          buttonLink="/contact"
        />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
};

export default Events;
