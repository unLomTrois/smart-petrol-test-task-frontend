import Api from "./index";

class BooksApi extends Api {
  async getBooks() {
    const resp = await this.axios.get("books/")

    return resp.data;
  }

  async getBook(book_id) {
    const resp = await this.axios.get(`books/${book_id}`)

    return resp.data;
  }

  async issueBook(book_id, user_id, end_of_issue) {
    const resp = await this.axios.post("books/issues/", { book_id, user_id, end_of_issue })

    return resp.data;
  }

  async giveABookBack(book_item_id) {
    const resp = await this.axios.delete(`books/issues/${book_item_id}`)

    return resp.data;
  }


}

const books_api = new BooksApi();

export default books_api;
