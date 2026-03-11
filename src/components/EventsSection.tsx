import { useEffect, useRef, useState } from 'react';
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
  const [showModal, setShowModal] = useState(false);

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
        'Host private gatherings or intimate celebrations in our cozy coffee room with personalized service.',
    },
    {
      id: 'birthday',
      title: 'Birthday Party',
      content:
        'Celebrate your special day at Cafe Grano with custom birthday arrangements, great food and amazing coffee.',
    },
    {
      id: 'meeting',
      title: 'Working & Meeting',
      content:
        'Perfect place for business meetings or remote work with peaceful ambience and great coffee.',
    },
  ];

  const toggleAccordion = (id: string) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  return (
    <>
      <section ref={sectionRef} className="section events-section">
        <div className="container">
          <div className="events-grid">

            {/* Images */}
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
                Cafe Grano is the perfect place for your private gatherings,
                birthday celebrations, and business meetings. Enjoy great coffee,
                delicious food, and a cozy ambience for your special moments.
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

              <button
                className="btn btn-primary"
                onClick={() => setShowModal(true)}
              >
                Schedule An Event
              </button>
            </div>

          </div>
        </div>
      </section>


      {/* Modal */}
      {showModal && (
        <div className="event-modal-overlay">

          <div className="event-modal">

            <button
              className="modal-close"
              onClick={() => setShowModal(false)}
            >
              ✕
            </button>

            <h3>Event Enquiry</h3>

            <p>
              Interested in hosting an event at Cafe Grano?  
              Fill the form below and our team will contact you.
            </p>

            <form className="event-form">

              <input
                type="text"
                placeholder="Full Name"
                required
              />

              <input
                type="email"
                placeholder="Email Address"
                required
              />

              <input
                type="tel"
                placeholder="Phone Number"
                required
              />

              <select required>
                <option value="">Select Event Type</option>
                <option>Birthday Party</option>
                <option>Private Gathering</option>
                <option>Business Meeting</option>
                <option>Other</option>
              </select>

              <input
                type="date"
                required
              />

              <textarea
                placeholder="Tell us about your event"
                rows={4}
              />

              <button type="submit" className="btn btn-primary">
                Send Enquiry
              </button>

            </form>

          </div>

        </div>
      )}
    </>
  );
};

export default EventsSection;