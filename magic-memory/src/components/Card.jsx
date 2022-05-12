import './Card.css';

const Card = ({ src, id }) => {
  return (
    <div className="card">
      <div>
        <img src={src} alt="card front" className="front" />
        <img src="/img/cover.png" alt="card back" className="back" />
      </div>
    </div>
  );
};

export default Card;
