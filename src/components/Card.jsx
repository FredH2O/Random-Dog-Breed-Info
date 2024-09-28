import "./Card.css";
import DogAPI from "./DogAPI";

export default function Card({
  img,
  name,
  description,
  lifespan,
  bredFor,
  onNEXT,
}) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="card-text">
          <b>Nature:</b> {description}
        </p>
        <p className="card-text">
          <b>Life Span:</b> {lifespan}
        </p>
        <p className="card-text">
          <b>Bred For:</b> {bredFor}
        </p>
        <button class="btn btn-success" onClick={onNEXT}>
          NEXT
        </button>
      </div>
    </div>
  );
}
