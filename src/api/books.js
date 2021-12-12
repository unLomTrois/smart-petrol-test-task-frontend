import Api from "./index";

class BooksApi extends Api {
  async getBooks() {
    const resp = await this.axios.get("books/")

    return resp.data;
  }
}

const books_api = new BooksApi();

export default books_api;
