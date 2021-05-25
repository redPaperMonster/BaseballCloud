import { SignInPayload, SignUpPayload } from "./types";

import { APIService } from "./APIService";
import { AxiosResponse } from "axios";
const API_URL = "https://baseballcloud-back.herokuapp.com/api/v1/auth";
const UPLOAD_URL =
  "https://baseballcloud-back.herokuapp.com/api/v1/s3/signed_url";
interface ResponseType {
  success: boolean;
  errors: string[];
}
const fetchService = {
  signIn: async (payload: SignInPayload) => {
    const res: any = await APIService.post(`${API_URL}/sign_in`, payload);
    if (!res.errors) {
      localStorage.setItem("token", res.headers["access-token"]);
      localStorage.setItem("client", res.headers["client"]);
      localStorage.setItem("uid", res.headers["uid"]);
    }
    return res;
  },

  validateToken: () => {
    const token = localStorage.getItem("token");
    const client = localStorage.getItem("client");
    const uid = localStorage.getItem("uid");
    const config = {
      headers: {
        "access-token": token || "",
        client: client || "",
        uid: uid || "",
      },
    };

    return APIService.get(`${API_URL}/validate_token`, config);
  },

  signUp: async (payload: SignUpPayload) => {
    const res = await APIService.post(`${API_URL}`, payload);
    if (!res.errors) {
      localStorage.setItem("token", res.headers["access-token"]);
      localStorage.setItem("client", res.headers["client"]);
      localStorage.setItem("uid", res.headers["uid"]);
    }
    return res;
  },
  forgotPassword: async (email: string) => {
    return await APIService.post(`${API_URL}/password`, {
      email,
      redirect_url: "https://baseballcloud-front.herokuapp.com/resetpassword",
    });
  },
  logOut: async () => {
    return await APIService.delete(`${API_URL}/sign_out`);
  },
  uploadPhoto: async (payload: any, name: any) => {
    const config = {
      headers: {},
    };
    const options = {
      headers: {
        "Content-Type": payload.type,
      },
    };
    const token = localStorage.getItem("token");
    const client = localStorage.getItem("client");
    const uid = localStorage.getItem("uid");
    config.headers = {
      ...config.headers,
      "access-token": token || "",
      client: client || "",
      uid: uid || "",
    };

    const signedRes = await APIService.post(`${UPLOAD_URL}`, name, config);
    const uploadRes = await APIService.put(signedRes.data.signedUrl, payload);
    return uploadRes;
  },
};

export default fetchService;
