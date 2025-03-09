import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import restClient, { SERVER } from "../components/constants/restClient";
const GenreSelection = () => {
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);
  const genresMap = {
    Romance: "/images/romance.png",
    Fiction: "/images/comics.png",
    Horror: "/images/horror.png",
    Action: "/images/action.png",
    Thriller: "/images/thriller.png",
    Adventure: "/images/adventure.png",
    Fantasy: "/images/fantasy.png",
    Detective: "/images/detective.png",
    Biography: "/images/biography.png",
    Education: "/images/education.png",
    History: "/images/history.png",
    Business: "/images/business.png",
  };

  // const genres = [
  //   { name: "Romance", image: "/images/romance.png" },
  //   { name: "Comics", image: "/images/comics.png" },
  //   { name: "Horror", image: "/images/horror.png" },
  //   { name: "Action", image: "/images/action.png" },
  //   { name: "Thriller", image: "/images/thriller.png" },
  //   { name: "Adventure", image: "/images/adventure.png" },
  //   { name: "Fantasy", image: "/images/fantasy.png" },
  //   { name: "Detective fictions", image: "/images/detective.png" },
  //   { name: "Biography", image: "/images/biography.png" },
  //   { name: "Education", image: "/images/education.png" },
  //   { name: "History", image: "/images/history.png" },
  //   { name: "Business", image: "/images/business.png" },
  // ];

  const handleGenreClick = (genre) => {
    if (selectedGenres.includes(genre.id)) {
      setSelectedGenres((selectedGenres) =>
        selectedGenres.filter((g) => g !== genre.id)
      );
    } else {
      if (selectedGenres.length < 3) {
        setSelectedGenres([...selectedGenres, genre.id]);
      }
    }
  };

  const fetchAllGenres = async () => {
    const { data } = await restClient.get(`${SERVER}/genres`);
    setGenres(data);
  };

  const handlePostPref = async () => {
    localStorage.setItem("pref", JSON.stringify(selectedGenres));
    const username = JSON.parse(localStorage.getItem("username") || "");
    await restClient.post(`${SERVER}/customers/fav?username=${username}`, {
      favorites: selectedGenres.join(","),
    });
  };

  useEffect(() => {
    fetchAllGenres();
  }, []);

  console.log(selectedGenres);
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Please choose <span className="text-[#E97B58]">3</span> Books genres you
        like
      </h1>

      <div className="grid grid-cols-4 gap-x-6 gap-y-6 w-full max-w-4xl mb-8">
        {genres.map((genre, index) => (
          <div
            key={index}
            onClick={() => handleGenreClick(genre)}
            className={`relative flex flex-col items-center justify-center border-2 ${
              selectedGenres.includes(genre.id)
                ? "border-4 border-[#E97B58] scale-110"
                : "border-transparent"
            } rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer h-[250px]`}
          >
            <img
              src={genresMap[genre.name]}
              alt={genre.name}
              className="w-full h-full object-cover"
            />

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
              <p className="text-white font-bold text-sm">{genre.name}</p>
            </div>
          </div>
        ))}
      </div>

      <Link
        to="/home"
        className={`px-12 py-4 text-white font-bold rounded-lg transition-colors text-2xl ${
          selectedGenres.length === 3
            ? "bg-[#E97B58] hover:bg-[#D96C4A]"
            : "bg-gray-300 cursor-not-allowed"
        }`}
        onClick={(e) => {
          if (selectedGenres.length !== 3) {
            e.preventDefault();
          }
          handlePostPref();
        }}
      >
        Next
      </Link>
    </div>
  );
};

export default GenreSelection;
