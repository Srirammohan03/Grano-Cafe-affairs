import { useEffect, useRef, useState } from 'react';
import testimonialsBg from '/images/testi.jpg';
import quoteCup from '../assets/coffee-cup-quote.png';
import '../styles/sections.css';

interface Testimonial {
  id: number;
  text: string;
  author: string;
}

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
        {
      id: 1,
      text: `The ambience is nice, both indoor and outdoor seating space is there. I liked hot chocolate. Farm fresh pizza in veg was good. I would recommend to try pasta.`,
      author: 'Aakanksha Jain',
    },
    {
      
      id: 2,
      text: `Grano Café delivers a really satisfying dining experience from start to finish. The starters were fresh and full of flavor, setting the tone for what was to come—well-seasoned, nicely presented, and clearly made with quality ingredients.
The main courses were the highlight of the meal. Each dish was hearty, comforting, and thoughtfully prepared, with generous portions and rich flavors that felt both indulgent and well-balanced. You can tell care goes into the cooking, and everything tasted fresh and made to order.
To finish, the desserts were the perfect ending—sweet without being overwhelming and beautifully presented. Light, creamy, and full of flavor, they left a great final impression.
Overall, Grano Café is a great spot for anyone looking for delicious food, a cozy atmosphere, and a well-rounded menu. Definitely worth visiting again.`,
      author: 'Mohammed Akmal',
    },

    {
      id: 3,
      text: `Grano feels like one of those places you accidentally discover and then want to keep returning to. The space is calm, green, and thoughtfully designed — perfect for slow conversations, quiet work, or an unhurried meal.
The food really stands out. The dish I tried was beautifully balanced — fresh, clean flavours, well-textured, and plated with care. You can tell there’s attention to ingredients and restraint rather than overdoing things. Nothing felt heavy; everything felt intentional.
What I appreciated most was the overall experience. It’s not just about coffee or food — it’s about slowing down for a bit. The ambience, the lighting, and the pacing make you want to stay longer than planned.
A great spot for brunch, solo time, or a low-key date. Definitely one of the nicer cafés in Jubilee Hills if you enjoy calm spaces and thoughtfully made food. ⭐⭐⭐⭐⭐`,
      author: 'Khash',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const next = () =>
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section
      ref={sectionRef}
      className="testimonials-section "
      style={{ backgroundImage: `url(${testimonialsBg})` }}
    >
      <div className="testimonials-overlay" />

      {/* Top Quote Cup */}
      <div className="testimonial-cup">
        <img src={quoteCup} alt="Quote cup" />
      </div>

      <div className="container">
        <div className={`testimonials-content fade-in ${isVisible ? 'visible' : ''}`}>
          <span className="testimonials-subheading">
            Customer Testimonials
          </span>

          <h2 className="testimonials-title">What Customers Say?</h2>

          <p className="testimonial-text">
            “ {testimonials[currentIndex].text} ”
          </p>

          <p className="testimonial-author">
            – {testimonials[currentIndex].author} –
          </p>

          <div className="testimonial-nav">
            <button onClick={prev}>←</button>
            <button onClick={next}>→</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
