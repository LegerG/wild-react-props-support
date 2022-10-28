import "./InfoCard.css";

export function InfoCard({ email, phone, location }) {
  return (
    <div className="infoCard">
      <div className="infoCard__email">
        <span className="infoIcon">📧</span>
        <a href={`mailto:${email}`} target="_blank" rel="noreferrer">
          {email}
        </a>
      </div>
      <div className="infoCard__phone">
        <span className="infoIcon">📞</span>
        <a href={`tel:${phone}`} target="_blank" rel="noreferrer">
          {phone}
        </a>
      </div>
      <div className="infoCard__location">
        <span className="infoIcon">📍</span>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURI(
            location
          )}`}
          target="_blank"
          rel="noreferrer"
        >
          {location}
        </a>
      </div>
    </div>
  );
}
