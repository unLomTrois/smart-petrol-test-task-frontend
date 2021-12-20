import { useEffect, useState } from "react";

import books_api from "api/books";

export const useBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    (async () => setBooks(await books_api.getBooks()))();
  }, []);

  return books;
};

export const useBook = (book_id) => {
  const [book, setBook] = useState();

  useEffect(() => {
    (async () => setBook(await books_api.getBook(book_id)))();
  }, [book_id]);

  return book;
};

export const useIsBooked = (book_id, user_id) => {
  const [is_booked, setBooked] = useState();

  useEffect(() => {
    (async () => setBooked(await books_api.isAlreadyBooked(book_id, user_id)))();
  }, [book_id, user_id]);

  console.log(is_booked)

  return is_booked;
};
