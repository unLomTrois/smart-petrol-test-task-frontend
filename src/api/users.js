import Api from "./index";

class UsersApi extends Api {
  async getUsers() {
    const resp = await this.axios.get("users/")

    return resp.data;
  }

  async deleteUser(id) {
    const resp = await this.axios.delete(`users/${id}/delete`);

    return resp.data;
  }

}

const users_api = new UsersApi();

export default users_api;
