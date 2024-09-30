import { useEffect, useState } from "react";
import "./Card.css";

export default function Card({
  img,
  name,
  description,
  lifespan,
  bredFor,
  onNEXT,
}) {
  const [animatingOut, setAnimatingOut] = useState(false);

  const handleClick = () => {
    if (!animatingOut) {
      setAnimatingOut(true);
    }
  };

  useEffect(() => {
    if (animatingOut === true) {
      const timer = setTimeout(() => {
        onNEXT();
        setAnimatingOut(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [animatingOut, onNEXT]);

  return (
    <div
      className={`card animate__animated ${
        animatingOut
          ? "animate__bounceOut "
          : "animate__bounceIn animate__delay-1s"
      }`}
      style={{ width: "18rem" }}
    >
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="card-text">
          {description ? <b>Nature:</b> : ""}
          {description}
        </p>
        <p className="card-text">
          <b>Life Span:</b> {lifespan}
        </p>
        <p className="card-text">
          {bredFor ? <b>Bred For:</b> : ""} {bredFor}
        </p>
        <button className="btn btn-success" onClick={handleClick}>
          <i className="bi bi-arrow-repeat"></i>
        </button>
      </div>
    </div>
  );
}
