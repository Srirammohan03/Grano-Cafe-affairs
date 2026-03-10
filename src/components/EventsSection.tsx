import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import eventsOutdoor from '../assets/events-outdoor.jpg';
import eventsCoffee from '../assets/events-coffee.jpg';
import '../styles/sections.css';

interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

const EventsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<string | null>('private');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const accordionItems: AccordionItem[] = [
    {
      id: 'private',
      title: 'Private Coffee Room',
      content:
        'Donec aliquet, erat non tempor hendrerit, est augue viverra augue, non dignissim metus urna eget ante.',
    },
    {
      id: 'birthday',
      title: 'Birthday Party',
      content:
        'Celebrate your special day with us! We offer customized birthday packages with decorations.',
    },
    {
      id: 'meeting',
      title: 'Working & Meeting',
      content:
        'Perfect for business meetings and remote work. High-speed wifi and excellent coffee.',
    },
  ];

  const toggleAccordion = (id: string) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  return (
    <section ref={sectionRef} className="section events-section">
      <div className="container">
        <div className="events-grid">
          {/* ✅ Collage Images */}
          <div className={`events-collage fade-in-left ${isVisible ? 'visible' : ''}`}>
            <div className="collage-img collage-main image-zoom">
              <img src={eventsOutdoor} alt="Outdoor event" loading="lazy" />
            </div>

            <div className="collage-img collage-overlay image-zoom">
              <img src={eventsCoffee} alt="Coffee setting" loading="lazy" />
            </div>
          </div>

          {/* Content */}
          <div className={`events-content fade-in-right ${isVisible ? 'visible' : ''}`}>
            <span className="subheading">Private Event</span>
            <h2>The Perfect Venue for Your Special Event</h2>
            <p>
              Our cafe is the perfect venue for your special event, you can organize a light
              birthday party, meet friends, or work peacefully.
            </p>

            <div className="accordion">
              {accordionItems.map((item) => (
                <div
                  key={item.id}
                  className={`accordion-item ${activeAccordion === item.id ? 'active' : ''}`}
                >
                  <button
                    className="accordion-header"
                    onClick={() => toggleAccordion(item.id)}
                  >
                    <span className="accordion-title">{item.title}</span>
                    <span className="accordion-icon">+</span>
                  </button>
                  <div className="accordion-content">
                    <p className="accordion-body">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/events" className="btn btn-primary">
              Schedule An Event
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
