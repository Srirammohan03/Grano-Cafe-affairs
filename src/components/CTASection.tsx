import { Link } from 'react-router-dom';
import '../styles/pages.css';

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

const CTASection = ({
  title = 'Ready to Experience Great Coffee?',
  description = 'Visit us today and discover why we are the favorite coffee spot in town.',
  buttonText = 'Book A Table',
  buttonLink = '/contact',
}: CTASectionProps) => {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-content">
          <h2>{title}</h2>
          <p>{description}</p>
          <Link to={buttonLink} className="btn btn-outline">
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
