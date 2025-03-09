import React, { useEffect, useState } from "react";
import { decodeToken } from "../components/constants/jwtDecode";
import restClient, { SERVER } from "../components/constants/restClient";
import AdminNavbar from "../components/navbar/AdminNavbar";
import { useLocation } from "react-router-dom";

const EditBook = () => {
  const [selectedGenres, setSelectedGenres] = useState([]);

  const location = useLocation();
  const currentBook = location.state;
  const [genres, setGenres] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [publishers, setPublishers] = useState([]);
  const [selectedAuthor, setSelectedAuthor] = useState({});
  const [selectedPublisher, setSelectedPublisher] = useState({});

  const [book, setBook] = useState({
    title: currentBook.title,
    description: currentBook.description,
    isbn: currentBook.isbn,
    language: currentBook.language,
    image_url: currentBook.image_url,
    price: currentBook.price,
    rating: currentBook.rating,
    year: currentBook.year,
    pages: currentBook.pages,
  });

  async function getAuthors() {
    const { data } = await restClient.get(`${SERVER}/authors`);
    setAuthors(data);
  }

  async function getGenres() {
    const { data } = await restClient.get(`${SERVER}/genres`);
    setGenres(data);
  }

  async function getPublisher() {
    const { data } = await restClient.get(`${SERVER}/publishers`);
    setPublishers(data);
  }

  useEffect(() => {
    if (currentBook && currentBook.genres) {
      // Extract genre IDs from the book's genres
      const initialSelectedGenres = currentBook.genres.map((genre) => genre.id);
      setSelectedGenres(initialSelectedGenres);
    }
    if (currentBook && currentBook.publisher) {
      // Set the initial value to the book's publisher ID
      setSelectedPublisher(currentBook.publisher.id);
    }
    if (currentBook && currentBook.author) {
      // Set the initial value to the book's publisher ID
      setSelectedAuthor(currentBook.author.id);
    }
  }, [currentBook]);

  useEffect(() => {
    getGenres();
    getAuthors();
    getPublisher();
    decodeToken();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents page reload
    const request = {
      ...book,
      genres_id: selectedGenres.map(Number),
      author_id: Number(selectedAuthor),
      publisher_id: Number(selectedPublisher),
    };

    const res = await restClient.put(
      `${SERVER}/books/${currentBook.id}`,
      request
    );
    // Success
  };

  return (
    <div className="">
      <div>
        <AdminNavbar />
      </div>
      <div className="layout">
        <h2 className="text-3xl font-semibold mb-6 mt-8 text-center ">
          Upload A New Book
        </h2>

        <div className="w-[40%] mx-auto bg-white p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Book Name
                </label>
                <input
                  type="text"
                  name="title"
                  value={book.title}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Game Of Thrones"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Book Description
                </label>
                <input
                  type="text"
                  name="description"
                  value={book.description}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Description"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Book ISBN
                </label>
                <input
                  type="text"
                  name="isbn"
                  value={book.isbn}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="ISBN"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Genre</label>
                <select
                  multiple={true}
                  value={selectedGenres}
                  onChange={(e) => {
                    const options = [...e.target.selectedOptions];
                    const values = options.map((option) => option.value);
                    setSelectedGenres(values);
                  }}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white shadow-sm"
                >
                  {genres.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Author</label>
                <select
                  value={selectedAuthor}
                  onChange={(e) => {
                    setSelectedAuthor(e.target.value);
                  }}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white shadow-sm"
                >
                  {authors.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Publisher
                </label>
                <select
                  value={selectedPublisher}
                  onChange={(e) => {
                    setSelectedPublisher(e.target.value);
                  }}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white shadow-sm"
                >
                  {publishers.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Price</label>
                <input
                  type="text"
                  name="price"
                  value={book.price}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="25000 MMK"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Photo</label>
                <input
                  type="text"
                  name="image_url"
                  value={book.image_url}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Image Url"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Rating</label>
                <input
                  type="text"
                  name="rating"
                  value={book.rating}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="5.0"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Language
                </label>
                <input
                  type="text"
                  name="language"
                  value={book.language}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="English"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Year</label>
                <input
                  type="text"
                  name="year"
                  value={book.year}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="2000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Pages</label>
                <input
                  type="text"
                  name="pages"
                  value={book.pages}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="110"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-custom-orange text-white p-2 rounded-lg hover:bg-hover-orange"
            >
              Edit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditBook;
