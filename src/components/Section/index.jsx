import { Link } from 'react-router-dom';
import './styles.css';

const Section = ({ title, titleAlign = 'left', link, children }) => {
  return (
    <section className="section">
      <div
        className="section__topo"
        style={{ justifyContent: titleAlign === 'center' ? 'center' : 'space-between' }}
      >
        <h2 className="section__titulo">{title}</h2>
        {link && titleAlign !== 'center' && (
          <Link to={link.href} className="section__link">
            {link.text} →
          </Link>
        )}
      </div>
      {children}
    </section>
  );
};

export default Section;