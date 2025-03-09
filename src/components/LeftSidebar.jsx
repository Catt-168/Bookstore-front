import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import restClient, { SERVER } from "./constants/restClient";

const LeftSidebar = ({ genres, selectedGenre, onChangeGenre }) => {
  // const genres = [
  //   "Action",
  //   "Biography",
  //   "Business",
  //   "Comics",
  //   "Detective",
  //   "Education",
  //   "Fantasy",
  //   "History",
  //   "Horror",
  //   "Romance",
  //   "Science",
  //   "Thriller",
  // ];

  return (
    <div className="w-78 p-4 bg-gray-50 border-r border-gray-200 tailwind-scrollbar pl-[135px]">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Genres</h2>
      <div className="flex flex-col gap-2">
        {genres.map((genre, index) => (
          <Link
            key={index}
            // to={`/${genre.name.toLowerCase()}`}
            onClick={() => onChangeGenre(genre)}
            className={`text-lg cursor-pointer p-2 rounded-lg transition-colors ${
              selectedGenre.name.toLowerCase() === genre.name.toLowerCase()
                ? "bg-[#E97B58] text-white font-semibold"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            {genre.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LeftSidebar;
