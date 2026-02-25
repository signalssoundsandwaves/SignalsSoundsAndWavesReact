import { Link } from 'react-router-dom';

function Card({
  title,
  text,
  image,
  imagePosition = 'float-end',
  link,
  externalLink,
  customContent,
  cardRef,
}) {
  return (
    <div className="card h-100" ref={cardRef}>
      <div className="card-body">
        {image && (
          <img
            src={image}
            alt={title}
            className={`img-fluid ${imagePosition} mb-3`}
          />
        )}
        <h4 className="card-title">{title}</h4>
        {text && <p className="card-text">{text}</p>}
        {link && (
          <Link to={link.to} className="card-link">
            {link.label}
          </Link>
        )}
        {externalLink && (
          <a href={externalLink.href} className="card-link">
            {externalLink.label}
          </a>
        )}
        {customContent && <div>{customContent}</div>}
      </div>
    </div>
  );
}

export default Card;
