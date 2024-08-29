import React, { useEffect, useState } from "react";
import background from "./../assets/background-1.png";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const CreateHelpCenter = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleCreateCard = () => {
    axios
      .post("https://helpcenter-backend-3.onrender.com/api/helpcenter/create", {
        title,
        description,
      })
      .then((res) => {
        console.log(res);
        setTitle("");
        setDescription("");
        toast.success("Card created successfully!");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed to create card.");
      });

    console.log(title, description);
  };

  return (
    <div
      style={{
        backgroundImage: `url('${background}')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div className="flex flex-col items-center justify-center h-full p-3 ">
        <h1 className="text-6xl font-bold text-black ">Create Card</h1>
        <div className="flex flex-col ">
          <div className="flex flex-col gap-1">
            <label className="text-lg text-white">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="px-3 py-2 text-black border border-black rounded-md w-80 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter title"
              style={{ background: "none" }}
            />
          </div>
          <div className="flex flex-col mb-3">
            <label className="text-lg text-white">Description</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="px-3 py-2 text-black border border-black rounded-md w-80 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter description"
              style={{ background: "none" }}
            />
          </div>
          <button
            className="px-6 py-3 mt-5 text-xl font-semibold text-white bg-black rounded-md hover:bg-gray-800"
            onClick={handleCreateCard}
          >
            Create
          </button>
        </div>
      </div>
      <Toaster position="top-center" />
    </div>
  );
};

export default CreateHelpCenter;
