import styles from "./Books.module.css";

import Header from "components/Header";
import { Routes, Route } from "react-router-dom";

import { BookView } from "./BookView";
import { BookList } from "./BookList";

const Books = () => {
  return (
    <div className={styles.books__wrapper}>
      <Header />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path=":id" element={<BookView />} />
      </Routes>
    </div>
  );
};

export default Books;
