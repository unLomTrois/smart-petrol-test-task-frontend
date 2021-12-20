import { useBook, useBooks } from "hooks/books";
import styles from "./Books.module.css";

import Header from "components/Header";
import { Link, Routes, Route, useParams } from "react-router-dom";
import { useUser } from "hooks/user";
import { useState } from "react";

import books_api from "api/books";

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

const BookList = () => {
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

const BookView = () => {
  const me = useUser();
  const params = useParams();
  const book = useBook(params.id);

  const [client_id, setClientID] = useState("");
  const [end_of_issue, setEndOfIssue] = useState(
    new Date().toISOString().split("T")[0]
  );

  const [booking_id, setBookingId] = useState("");
  const [show_message, showMessage] = useState(false);

  const issueBook = () => {
    books_api.issueBook(book.id, client_id, end_of_issue).then((res) => {
      setBookingId(res.id);
      showMessage(true);
      setTimeout(() => {
        showMessage(false);
      }, 5000);
    });
  };

  return (
    <div className={styles.book_view__wrapper}>
      <div className={styles.book_view__comments}></div>

      <div className={styles.book_view__content}>
        <div className={styles.book_view__book__header}>
          <h1>{book?.title}</h1>
          <p>{book?.author}</p>
        </div>
        <div className={styles.book_view__book__body}>
          <div className={styles.book_view__book__description}>
            {book?.description}
          </div>
        </div>
        <div className={styles.book_view__book__footer}>
          <p className={styles.book_view__book__pages}>{book?.pages}</p>
          <p className={styles.book_view__book__count}>
            {book?.count > 0 ? (
              <> осталось штук: {book?.count} </>
            ) : (
              "кончились"
            )}
          </p>
        </div>
      </div>
      <div className={styles.book_view__actions}>
        <div className={styles.book_view__actions__main}>
          <div className={styles.book_view__actions__buttons}>
            {me?.role?.code === "client" && (
              <button className={styles.book_view__action}>
                забронировать
              </button>
            )}

            {me?.role?.code === "librarian" && (
              <button className={styles.book_view__action} onClick={issueBook}>
                выдать
              </button>
            )}
          </div>
          {me?.role?.code === "librarian" && (
            <div className={styles.book_view__issue_form}>
              <input
                type="number"
                className={styles.book_view__issue_form__input}
                placeholder="введите ID клиента"
                onChange={(e) => setClientID(e.target.value)}
                value={client_id}
              />
              <p>
                дата завершения:
                <input
                  type="date"
                  className={styles.book_view__issue_form__input}
                  onChange={(e) => setEndOfIssue(e.target.value)}
                  value={end_of_issue}
                />
              </p>
            </div>
          )}
          {show_message && (
            <div className={styles.book_view__message}>
              Номер выдачи: {booking_id}
            </div>
          )}
        </div>
        {me?.role?.code === "librarian" && (
          <div className={styles.book_view__actions__buttons}>
            <button className={styles.book_view__action}>удалить</button>
          </div>
        )}
      </div>
    </div>
  );
};

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
