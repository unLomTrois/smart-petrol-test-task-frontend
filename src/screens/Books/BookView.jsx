import { useBook, useIsBooked } from "hooks/books";
import styles from "./Books.module.css";
import { useParams } from "react-router-dom";
import { useUser } from "hooks/user";
import { useState } from "react";
import books_api from "api/books";

const IssueForm = ({ book_id, showMessage }) => {
  const [client_id, setClientID] = useState("");
  const [end_of_issue, setEndOfIssue] = useState(
    new Date().toISOString().split("T")[0]
  );

  const issueBook = () => {
    if (client_id && end_of_issue) {
      books_api
        .issueBook(book_id, client_id, end_of_issue)
        .then((res) => {
          showMessage(`Сообщите клиенту номер книги: ${res.book_item_id}`);
        })
        .catch((res) => {
          showMessage(res.response.data.detail);
        });
    }
  };

  return (
    <div className={styles.book_view__issue_form}>
      <h3>выдача книг</h3>
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

      <button className={styles.form_action} onClick={issueBook}>
        выдать
      </button>
    </div>
  );
};

const EndIssueForm = ({ showMessage }) => {
  const [book_item_id, setBookItemID] = useState("");

  const endIssue = () => {
    if (book_item_id) {
      books_api
        .giveABookBack(book_item_id)
        .then((res) => {
          showMessage("Книга успешно принята");
        })
        .catch(() => {
          showMessage("технические неполадки");
        });
    }
  };

  return (
    <div className={styles.book_view__issue_form}>
      <h3>приём книг</h3>
      <input
        type="number"
        className={styles.book_view__issue_form__input}
        placeholder="введите ID книги"
        onChange={(e) => setBookItemID(e.target.value)}
        value={book_item_id}
      />
      <button className={styles.form_action} onClick={endIssue}>
        принять
      </button>
    </div>
  );
};

const AddBooksForm = ({ book_id, showMessage }) => {
  const [count, setCount] = useState("");

  const addBooks = () => {
    if (count) {
      books_api
        .addBookItems(book_id, count)
        .then((res) => {
          showMessage(res.message);
        })
        .catch(() => {
          showMessage("технические неполадки");
        });
    }
  };

  return (
    <div className={styles.book_view__issue_form}>
      <h3>добавление книг</h3>
      <input
        type="number"
        className={styles.book_view__issue_form__input}
        placeholder="введите количество книг"
        onChange={(e) => setCount(e.target.value)}
        value={count}
      />
      <button
        className={styles.form_action}
        onClick={() => {
          addBooks();
        }}
      >
        принять
      </button>
    </div>
  );
};

const BookingForm = ({ user_id, showMessage }) => {
  const params = useParams();

  const book_id = params.id;

  const booked_book = useIsBooked(book_id, user_id);

  const [end_of_booking, setEndOfBooking] = useState(
    new Date().toISOString().split("T")[0]
  );

  const bookABook = () => {
    if (end_of_booking) {
      books_api
        .bookABook(user_id, book_id, end_of_booking)
        .then((res) => {
          showMessage(res.message);
          window.location.reload();
        })
        .catch(() => {
          showMessage("технические неполадки");
        });
    }
  };

  const unBookABook = () => {
    books_api
      .unBookABook(booked_book.book_item_id)
      .then((res) => {
        showMessage(res.message);
        window.location.reload();
      })
      .catch(() => {
        showMessage("технические неполадки");
      });
  };

  return (
    <div className={styles.book_view__issue_form}>
      {booked_book === null ? (
        <>
          <h3>Бронирование книг</h3>
          <p>
            дата завершения:
            <input
              type="date"
              className={styles.book_view__issue_form__input}
              onChange={(e) => setEndOfBooking(e.target.value)}
              value={end_of_booking}
            />
          </p>
          <button
            className={styles.form_action}
            onClick={() => {
              bookABook();
            }}
          >
            забронировать
          </button>
        </>
      ) : (
        <>
          <h3>книга уже забронирована</h3>
          <p>приходите в библиотеку для выдачи</p>

          <p>
            дата истечения бронирования:
            <time dateTime={booked_book?.end_of_booking}>
              {
                new Date(booked_book?.end_of_booking)
                  .toLocaleString()
                  .split(",")[0]
              }
            </time>
          </p>
          <button
            className={styles.form_action}
            onClick={() => {
              unBookABook();
            }}
          >
            снять бронь
          </button>
        </>
      )}
    </div>
  );
};

export const BookView = () => {
  const me = useUser();
  const params = useParams();
  const book = useBook(params.id);

  const [show_message, setShowMessage] = useState(false);
  const [message_text, setMessageText] = useState("");

  const showMessage = (text) => {
    setMessageText(text);
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 1000 * 60);
  };

  const deleteBook = () => {
    const sure = window.confirm("Are you sure you want to delete this book?");

    if (sure) {
      books_api.deleteBook(book?.id).then(() => {
        window.location.href = "/";
      });
    }
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
        <div className={styles.book_view__actions__buttons}>
          {me?.role?.code === "client" && (
            <BookingForm user_id={me?.id} showMessage={showMessage} />
          )}
        </div>
        <div className={styles.book_view__actions__main}>
          {me?.role?.code === "librarian" && (
            <>
              {book?.count > 0 && (
                <IssueForm book_id={book?.id} showMessage={showMessage} />
              )}
              <EndIssueForm showMessage={showMessage} />
              <AddBooksForm book_id={book?.id} showMessage={showMessage} />
            </>
          )}
          {show_message && (
            <div className={styles.book_view__message}>
              <p>{message_text}</p>
            </div>
          )}
        </div>
        {me?.role?.code === "librarian" && (
          <div className={styles.book_view__actions__buttons}>
            <button
              className={styles.book_view__action}
              onClick={() => {
                deleteBook();
              }}
            >
              удалить книгу
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
