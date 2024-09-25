import React, { useState, useEffect } from "react";

const DogAPI = () => {
  const [dogs, setDogs] = useState([]);
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
        setDogs(data);
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
};
