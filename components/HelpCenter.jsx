import React, { useEffect, useState } from "react";
import hero from "./../assets/home-banner.png";
import { IoMdSearch } from "react-icons/io";
import axios from "axios";
import { Link } from "react-router-dom";

const HelpCenter = () => {
  const [cards, setCards] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Function for search query
  const fetchCards = () => {
    const endpoint = searchQuery
      ? `https://helpcenter-backend-3.onrender.com/api/helpcenter/search?q=${encodeURIComponent(
          searchQuery
        )}`
      : "https://helpcenter-backend-3.onrender.com/api/helpcenter/getCards";

    axios
      .get(endpoint)
      .then((res) => {
        setCards(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchCards();
  }, [searchQuery]);

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Handle search
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    fetchCards();
  };

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
      <div className="flex flex-col items-center mt-16 bg-black">
        <h1 className="mt-10 text-3xl text-white md:text-6xl dm-sans">
          We are here to help!
        </h1>
        <p className="mt-5 text-white md:text-xl text-md">
          Have questions? Search through our Help Center.
        </p>
        <div className="relative mt-5 mb-10">
          <form onSubmit={handleSearchSubmit}>
            <input
              type="text"
              className="h-8 pl-8 pr-8 border-none rounded-md outline-none w-96"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button
              type="submit"
              className="absolute text-black transform -translate-y-1/2 right-3 top-1/2"
            >
              <IoMdSearch />
            </button>
          </form>
        </div>
      </div>
      <div>
        {cards.length > 0 ? (
          <div className="flex flex-wrap justify-center gap-0 mx-auto mt-16 md:gap-4">
            {cards.length > 0 ? (
              cards.map((item) => (
                <div
                  key={item._id}
                  className="border border-black w-[300px] h-[150px] mb-10 rounded-md "
                >
                  <h1 className="p-2 text-xl font-bold text-center text-white uppercase bg-black border-b border-black">
                    {item.title}
                  </h1>
                  <h1 className="p-2 uppercase text-md">{item.description}</h1>
                </div>
              ))
            ) : (
              <p className="text-center text-white">No results found</p>
            )}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center mt-32">
            <p>No Cards Found</p>
            <Link to="/create-help-center">
              <button className="px-4 py-2 mt-5 text-xl text-white bg-black rounded-md">
                Create Cards
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default HelpCenter;
