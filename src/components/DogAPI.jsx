import React, { useState, useEffect } from "react";
import Card from "./Card";

const DogAPI = () => {
  const [dog, setDogs] = useState(null);
  const [error, setError] = useState(null);
  const apiKey = process.env.REACT_APP_DOG_API_KEY;

  useEffect(() => {
    const fetchDogs = async () => {
      try {
        const response = await fetch(
          `https://api.thedogapi.com/v1/breeds?api_key=${apiKey}`
        );
        if (!response.ok) {
          throw new Error("Network response not ok");
        }
        const data = await response.json();
        console.log(data);
        const randomDoggo = data[Math.floor(Math.random() * data.length)];
        setDogs(randomDoggo);
      } catch (err) {
        setError(err.message);
        console.error("Error message: ", err);
      }
    };

    fetchDogs();
  }, [apiKey]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (dog) {
    return (
      <Card
        key={dog.id}
        img={dog.image?.url}
        name={dog.name}
        description={dog.temperament}
      />
    );
  }
};

export default DogAPI;
