import "./Card.css";

export default function Card({ img, name, description }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <a href="#" target="_blank" className="btn btn-primary">
          Learn more
        </a>
      </div>
    </div>
  );
}
