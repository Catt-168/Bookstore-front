import React, { useEffect, useState } from "react";
import LeftSidebar from "../components/LeftSidebar";
import Navbar from "../components/navbar/Navbar";
import restClient, { SERVER } from "../components/constants/restClient";
import { useNavigate } from "react-router-dom";
import { decodeToken } from "../components/constants/jwtDecode";
import BookList from "../components/BookList";

const Books = () => {
  const [selectedGenre, setSelectedGenre] = useState({
    id: 0,
    name: "",
    books: [],
  });
  const [genres, setGenres] = useState([]);
  const navigate = useNavigate();
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

  async function getBooksByGenre() {
    const { data } = await restClient.get(`${SERVER}/genres`);
    setGenres(data);
    setSelectedGenre(data[0]);
  }

  useEffect(() => {
    getBooksByGenre();
    decodeToken();
  }, []);

  function handleChangeGenre(genre) {
    setSelectedGenre(genre);
  }

  console.log("selet", selectedGenre.books);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Navbar */}
      <div className="navbar">
        <Navbar />
      </div>
      {/* Main Content */}
      <div className="flex flex-1">
        {/* Left Sidebar - Always Visible in Books Route */}
        <div className="sticky top-[64px] h-[calc(100vh-64px)] z-40 bg-white border-r border-gray-200">
          <LeftSidebar
            genres={genres}
            selectedGenre={selectedGenre}
            onChangeGenre={handleChangeGenre}
          />
        </div>

        {/* Page Content - This changes based on the route */}
        <div className="flex-1 p-8 pr-[135px]">
          <BookList books={selectedGenre?.books} title={selectedGenre.name} />
        </div>
      </div>

      {/* {selectedGenre?.books?.length !== 0 ? (
          <div className="flex-1 p-8 pr-[135px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {selectedGenre.books.map((book, index) => (
                <div
                  onClick={() =>
                    navigate(`../book/${book.id}`, { state: book })
                  }
                  key={index}
                  className="bg-white rounded-md shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  
                  <img
                    src={book.image_url}
                    alt={book.title}
                    className="w-full h-70 object-cover"
                  />

                  
                  <div className="p-4">
                    <h2 className="text-xl font-bold font-inter text-gray-800 whitespace-nowrap overflow-hidden text-ellipsis">
                      {book.title}
                    </h2>
                    <p className="text-gray-600 font-inter text-sm mt-1">
                      {book.author.name}
                    </p>
                    <p className="text-custom-orange font-inter text-lg font-semibold mt-2">
                      {book.price}
                    </p>

                    <button
                      disabled={generateDisable(book)}
                      className="w-full mt-4 px-4 py-2 bg-custom-orange text-white font-semibold font-roboto rounded-lg hover:bg-[#D96C4A] transition-colors"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          "No Books for this genre"
        )} */}
      {/* </div> */}
    </div>
  );
};

export default Books;
