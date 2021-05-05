import { SignInPayload } from "./types";
import axios, { AxiosResponse } from "axios";
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
}
