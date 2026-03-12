import { useEffect, useRef, useState } from 'react';
import eventsOutdoor from '/images/event.webp';
import eventsCoffee from '/images/event1.jpg';
import '../styles/sections.css';
import { toast } from "react-toastify";

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
  const [eventForm, setEventForm] = useState({
  name:"",
  email:"",
  phone:"",
  eventType:"",
  eventDate:"",
  message:""
});

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
  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwJzo4YjSftOutD-GTE8qaScbMeTV5MAENtaNCuOqod1I8deLqd6BuZXGLCqBBO_LES6g/exec";

const handleEventSubmit = async (e:any) => {

  e.preventDefault();

  try {

    const res = await fetch(SCRIPT_URL,{
      method:"POST",
      body: JSON.stringify({
        type:"event",
        ...eventForm
      })
    });

    if(res.ok){

      toast.success("Event enquiry sent successfully!");

      setEventForm({
        name:"",
        email:"",
        phone:"",
        eventType:"",
        eventDate:"",
        message:""
      });

      setShowModal(false);

    }

  } catch (error) {

    toast.error("Something went wrong");

  }

};

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
                Book An Event
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

            <form className="event-form" onSubmit={handleEventSubmit}>

<input
type="text"
placeholder="Full Name"
required
value={eventForm.name}
onChange={(e)=>setEventForm({...eventForm,name:e.target.value})}
/>

<input
type="email"
placeholder="Email Address"
required
value={eventForm.email}
onChange={(e)=>setEventForm({...eventForm,email:e.target.value})}
/>

<input
type="tel"
placeholder="Phone Number"
required
value={eventForm.phone}
onChange={(e)=>setEventForm({...eventForm,phone:e.target.value})}
/>

<select
required
value={eventForm.eventType}
onChange={(e)=>setEventForm({...eventForm,eventType:e.target.value})}
>
<option value="">Select Event Type</option>
<option value="Birthday Party">Birthday Party</option>
<option value="Private Gathering">Private Gathering</option>
<option value="Business Meeting">Business Meeting</option>
<option value="Other">Other</option>
</select>

<input
type="date"
required
value={eventForm.eventDate}
onChange={(e)=>setEventForm({...eventForm,eventDate:e.target.value})}
/>

<textarea
placeholder="Tell us about your event"
rows={4}
value={eventForm.message}
onChange={(e)=>setEventForm({...eventForm,message:e.target.value})}
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