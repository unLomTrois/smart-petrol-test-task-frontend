import styles from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <div className={styles.wrapper}>
      <input type="search" name="book-search" id="searchbar" className={styles.search_bar} />
    </div>
  );
};

export default SearchBar;
