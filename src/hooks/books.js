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

