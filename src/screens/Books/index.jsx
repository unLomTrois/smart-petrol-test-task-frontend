import { useBooks } from "hooks/books";
import styles from "./Books.module.css";

import SearchBar from "components/SearchBar";

const SingleBook = ({ title, author, pages }) => {
  return (
    <div className={styles.book_item__wrapper}>
      <h2 className={styles.book_item__title}>{title}</h2>
      <p className={styles.book_item__author}>{author}</p>
      <br />
      <p name="description" className={styles.book_item__description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
        mollitia velit dicta deserunt pariatur dolorem enim labore maxime dolor
        aperiam animi natus temporibus vero a. Consectetur commodi, impedit
        alias assumenda necessitatibus rerum? Nisi labore culpa quaerat saepe
        reprehenderit necessitatibus omnis perferendis. Officia dolore nihil
        nisi aperiam fugit maxime autem veritatis.
      </p>
      {/* <p className={styles.book_item__pages}>{pages}</p> */}
    </div>
  );
};

const Books = () => {
  const books = useBooks();

  return (
    <div className={styles.books__wrapper}>
      <SearchBar />
      <div className={styles.books__content}>
        {books.map((book, idx) => {
          return <SingleBook key={idx} {...book} />;
        })}
      </div>
    </div>
  );
};

export default Books;
