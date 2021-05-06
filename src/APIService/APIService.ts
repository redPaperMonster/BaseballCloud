import axios from "axios";
const config = {
  headers: {},
};

export class APIService {
  static service = axios.create();
  static async get(url: string) {
    const responseData = this.service.get(url, config).catch((error: any) => {
      console.log(`error!!!!!!!!`, error);
    });
    return responseData;
  }
  static async post(url: string, payload: any) {
    return await this.service.post(url, payload).catch((error) => {
      console.log(`error??????`, error);
      return error;
    });
  }
  static async delete(url: string) {
    const token = localStorage.getItem("token");
    const client = localStorage.getItem("client");
    const uid = localStorage.getItem("uid");
    config.headers = {
      ...config.headers,
      "access-token": token || "",
      client: client || "",
      uid: uid || "",
    };

    return await this.service.delete(url, config).catch((error) => {
      console.log(`error`, error);
      return error;
    });
  }
}
