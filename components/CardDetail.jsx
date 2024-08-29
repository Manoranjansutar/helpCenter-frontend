import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import hero from "./../assets/background-1.png";

//Funstion for search individual card detail
const CardDetail = () => {
  const { title } = useParams();
  const [card, setCard] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log("title from URL:", title);

  useEffect(() => {
    if (title) {
      axios
        .get(`https://helpcenter-backend-3.onrender.com/api/helpcenter/getcard/${title}`)
        .then((res) => {
          setCard(res.data);
          console.log(card);
          setLoading(false); 
        })
        .catch((err) => {
          console.error(err);
          setLoading(false); 
        });
    } else {
      console.log("Title is undefined");
      setLoading(false); 
    }
  }, [title]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!card) {
    return <p>No card found.</p>;
  }

  return (
    <div
    style={{
      backgroundImage: `url('${hero}')`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      width: "100vw",
      height: "100vh",
      overflowX: "hidden",
    }}
  >
    <div className="flex flex-col items-center justify-center w-full h-full p-4">
      <div className="w-full max-w-3xl p-6 rounded-lg shadow-lg bg-opacity-80">
        <div className="mb-4">
          <span className="mr-2 text-xl font-semibold md:text-2xl">Title:</span>
          <span className="text-2xl md:text-4xl">{card.title}</span>
        </div>
        <div>
          <span className="mr-2 text-xl font-semibold md:text-2xl">Description:</span>
          <span className="text-2xl md:text-4xl">{card.description}</span>
        </div>
      </div>
    </div>
  </div>
  );
};

export default CardDetail;
