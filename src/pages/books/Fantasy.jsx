import React from 'react'
import BookList from '../../components/BookList';


const Fantasy = () => {
  const books = [
    {
      id: '1',
      title: 'Harry Potter And The Philosopher\'s Stone',
      author: 'J.K. Rowling',
      price: '35000 MMK',
      image: '/action/book1.png',
    },
    {
      id: '2',
      title: 'Harry Potter And The Chamber of Secrets',
      author: 'J.K. Rowling',
      price: '35000 MMK',
      image: '/action/book1.png',
    },
  ];

  return (
   
      <BookList books={books} title="Fantasy Books" />
    
  );
};

export default Fantasy