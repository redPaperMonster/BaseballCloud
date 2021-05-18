import { SignInPayload, SignUpPayload } from "./types";

import { APIService } from "./APIService";
import { AnyCnameRecord } from "node:dns";
const API_URL = "https://baseballcloud-back.herokuapp.com/api/v1/auth";
const UPLOAD_URL =
  "https://baseballcloud-back.herokuapp.com/api/v1/s3/signed_url";
const fetchService = {
  signIn: async (payload: SignInPayload) => {
    return await APIService.post(`${API_URL}/sign_in`, payload).then((res) => {
      localStorage.setItem("token", res.headers["access-token"]);
      localStorage.setItem("client", res.headers["client"]);
      localStorage.setItem("uid", res.headers["uid"]);
      return res;
    });
  },

  validateToken: () => {
    return APIService.get(`${API_URL}/validate_token`);
  },

  signUp: async (payload: SignUpPayload) => {
    return await APIService.post(`${API_URL}`, payload).then((res) => {
      localStorage.setItem("token", res.headers["access-token"]);
      localStorage.setItem("client", res.headers["client"]);
      localStorage.setItem("uid", res.headers["uid"]);
      return res;
    });
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
  // TODO: avatar!
  uploadPhoto: async (payload: any, name: any) => {
    const token = localStorage.getItem("token");
    const client = localStorage.getItem("client");
    const uid = localStorage.getItem("uid");
    const config = {
      headers: {},
    };

    config.headers = {
      ...config.headers,
      "access-token": token || "",
      client: client || "",
      uid: uid || "",
    };
    const body = new FormData();
    // body.append("name", payload.name);
    // body.append("base64", payload.base64);
    body.append(payload.name, payload);
    // body.append("name", payload.name);
    // body.append("size", payload.size);
    // body.append("type", payload.type);
    const res = await APIService.post(
      `${UPLOAD_URL}`,
      { ...name, ...body },
      config
    );
    const res2 = await APIService.put(res.data.signedUrl, body);
    return res2;
  },
};

export default fetchService;
