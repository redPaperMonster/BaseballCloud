import axios from "axios";
const defaultConfig = {
  headers: {},
};

const setHeaders = () => {
  const headers = {
    "access-token": localStorage.getItem("token") || "",
    client: localStorage.getItem("client") || "",
    uid: localStorage.getItem("uid") || "",
  };

  const config = {
    ...defaultConfig,
    headers: {
      ...defaultConfig.headers,
      ...headers,
    },
  };
  return config;
};
export class APIService {
  static service = axios.create();

  static async get(url: string) {
    const config = setHeaders();
    const responseData = this.service.get(url, config).catch((e) => {
      return e;
    });
    return responseData;
  }

  static async post(url: string, payload: any) {
    const config = setHeaders();
    return await this.service.post(url, payload, config).catch((e) => {
      return e.response.data;
    });
  }

  static async put(url: string, body: any) {
    const config = setHeaders();
    return await this.service.put(url, body, config).catch((e) => {
      return e;
    });
  }

  static async delete(url: string) {
    const config = setHeaders();
    return await this.service.delete(url, config).catch((e) => {
      return e;
    });
  }
}
