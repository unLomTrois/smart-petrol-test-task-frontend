import { useBooks } from "hooks/books";
import styles from "./Books.module.css";

import Header from "components/Header";

const SingleBook = ({ title, author, description }) => {
  return (
    <div className={styles.book_item__wrapper}>
      <div className={styles.book_item__header}>
        <h2 className={styles.book_item__title}>{title}</h2>
        <p className={styles.book_item__author}>{author}</p>
      </div>
      <div className={styles.book_item__body}>
        <p className={styles.book_item__description}>{description}</p>
        {/* <p className={styles.book_item__pages}>{pages}</p> */}
      </div>
    </div>
  );
};

const Books = () => {
  const books = useBooks();

  return (
    <div className={styles.books__wrapper}>
      <Header />

      <div className={styles.books__content}>
        {books.map((book, idx) => {
          return <SingleBook key={idx} {...book} />;
        })}
      </div>

      <div className={styles.bottom}>

      <div className={styles.pagination}>
        <p>типа пагинация</p>
      </div>
      </div>
    </div>
  );
};

export default Books;
