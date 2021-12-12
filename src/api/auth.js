import Api from "./index";

class AuthApi extends Api {
  async generateToken(email, password) {
    const headers = {
      accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    };

    const payload = new FormData();
    payload.append("username", email);
    payload.append("password", password);

    const resp = await this.axios.post("auth/login", payload, headers);

    return resp.data.access_token;
  }

  setToken(token) {
    localStorage.setItem("token", token);
  }

  getToken() {
    return localStorage.getItem("token");
  }

  isAuthenticated() {
    return !!this.getToken();
  }

  async getCurrentUser() {
    const headers = {
      accept: "application/json",
      Authorization: "Bearer " + this.getToken(),
    };

    // const payload = new FormData();
    // payload.append("username", email);
    // payload.append("password", password);

    try {
      const resp = await this.axios.get("auth/me", { headers });
      return resp.data;
    } catch (e) {
      console.log("blyaaa");
      window.location.pathname = "/login";
      return;
    }
  }
}

const authApi = new AuthApi();
export default authApi;
