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
        const randomPickedDog = data[Math.floor(Math.random() * data.length)];

        const imageResponse = await fetch(
          `https://api.thedogapi.com/v1/images/${randomPickedDog.reference_image_id}?api_key=${apiKey}`
        );
        console.log(dog);
        const imageData = await imageResponse.json();

        setDogs({ ...randomPickedDog, image: { url: imageData.url } });
      } catch (err) {
        setError(err.message);
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
        img={dog.image?.url} // Image URL from the new API call
        name={dog.name}
        description={dog.temperament}
      />
    );
  }

  return <div>Loading...</div>; // Optionally add a loading state
};

export default DogAPI;
