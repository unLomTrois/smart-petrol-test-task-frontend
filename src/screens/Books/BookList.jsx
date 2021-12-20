import { useBooks } from "hooks/books";
import styles from "./Books.module.css";
import { Link } from "react-router-dom";

const SingleBookItem = ({ id, title, author, description }) => {
  return (
    <div className={styles.book_item__wrapper}>
      <div className={styles.book_item__header}>
        <div className={styles.book_item__header__index}>
          <h2 className={styles.book_item__title}>
            <Link to={`/books/${id}`}>{title}</Link>
          </h2>
          <h2 className={styles.book_item__index}>
            <Link to={`/books/${id}`}>#{id}</Link>
          </h2>
        </div>
        <p className={styles.book_item__author}>{author}</p>
      </div>
      <div className={styles.book_item__body}>
        <p className={styles.book_item__description}>{description}</p>
      </div>
    </div>
  );
};
export const BookList = () => {
  const books = useBooks();

  return (
    <>
      <div className={styles.books__content}>
        {books.map((book, idx) => {
          return <SingleBookItem key={idx} {...book} />;
        })}
      </div>

      <div className={styles.bottom}>
        <div className={styles.pagination}>
          <p>типа пагинация</p>
        </div>
      </div>
    </>
  );
};
