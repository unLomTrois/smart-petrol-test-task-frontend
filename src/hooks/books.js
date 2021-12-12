import { useEffect, useState } from "react";

import books_api from "api/books";

export const useBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    (async () => setBooks(await books_api.getBooks()))();
  }, []);

  return books;
};
