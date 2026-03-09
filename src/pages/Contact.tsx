import { useState, FormEvent, useEffect, useRef } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import locationImage from '../assets/why-choose-us.jpg';
import '../styles/pages.css';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const infoRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLElement>(null);
  const [isInfoVisible, setIsInfoVisible] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === infoRef.current) {
              setIsInfoVisible(true);
            }
            if (entry.target === formRef.current) {
              setIsFormVisible(true);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    if (infoRef.current) observer.observe(infoRef.current);
    if (formRef.current) observer.observe(formRef.current);

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
    setIsSubmitting(false);
  };

  const contactCards = [
    {
      icon: '📍',
      title: 'Our Location',
      content: 'D.8-2-293/82/A/ 1263/A, Road 63A & 64, Circle 18, Jubilee Hills, Hyderabad',
    },
    {
      icon: '📞',
      title: 'Phone Number',
      content: '+91 96769 64871',
    },
    {
      icon: '✉️',
      title: 'Email Address',
      content: 'granohyd@gmail.com',
    },
  ];

  return (
    <>
      <Header />
      <main>
        <Hero
          title="CONTACT US"
          subtitle="- Get In Touch -"
          description="We'd love to hear from you. Reach out with any questions or to book a table."
          showButtons={false}
          isPageHero={true}
          backgroundImage={locationImage}
        />

        {/* Contact Info Cards */}
        <section ref={infoRef} className="section contact-info-section">
          <div className="container">
            <div className="contact-grid">
              {contactCards.map((card, index) => (
                <div
                  key={index}
                  className={`contact-card fade-in ${isInfoVisible ? 'visible' : ''}`}
                  style={{ transitionDelay: `${index * 0.15}s` }}
                >
                  <div className="contact-card-icon">{card.icon}</div>
                  <h3>{card.title}</h3>
                  <p style={{ whiteSpace: 'pre-line' }}>{card.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section ref={formRef} className="section contact-form-section">
          <div className="container">
            <div className="contact-form-grid">
              <div className={`contact-form-content fade-in-left ${isFormVisible ? 'visible' : ''}`}>
                <span className="subheading">Send Us A Message</span>
                <h2>GET IN TOUCH</h2>
                <p>
                  Have a question or want to book a table? Fill out the form below and we'll
                  get back to you as soon as possible.
                </p>

                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="contact-form-row">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-input"
                        placeholder="Your Name *"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-input"
                        placeholder="Your Email *"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div className="contact-form-row">
                    <div className="form-group">
                      <input
                        type="tel"
                        className="form-input"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-input"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-textarea"
                      placeholder="Your Message *"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>

              <div className={`contact-map fade-in-right ${isFormVisible ? 'visible' : ''}`}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.6747675080314!2d78.41108467462783!3d17.42738890165261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91866f263499%3A0xb472ea500896e982!2sGrano%20-%20Coffee%20Affairs!5e0!3m2!1sen!2sin!4v1773048904051!5m2!1sen!2sin"
                  title="Location Map"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        <CTASection
          title="Visit Us Today"
          description="Experience the warmth and quality of Grano Coffee in person."
          buttonText="Get Directions"
        />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
};

export default Contact;
