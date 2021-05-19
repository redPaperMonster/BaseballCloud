import axios from "axios";
const config = {
  headers: {},
};

export class APIService {
  static service = axios.create();

  static async get(url: string, configs: any = config) {
    const responseData = this.service.get(url, configs).catch((error: any) => {
      return error;
    });
    return responseData;
  }

  static async post(url: string, payload: any, configs: any = config) {
    return await this.service.post(url, payload, configs).catch((error) => {
      return error;
    });
  }

  // TODO: avatar!
  static async put(url: string, body: any) {
    const token = localStorage.getItem("token");
    const client = localStorage.getItem("client");
    const uid = localStorage.getItem("uid");

    config.headers = {
      ...config.headers,
      "access-token": token || "",
      client: client || "",
      uid: uid || "",
    };
    return await this.service.put(url, null, config).catch((error) => {
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
      return error;
    });
  }
}
