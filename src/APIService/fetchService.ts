import { SignInPayload, SignUpPayload } from "./types";

import { APIService } from "./APIService";
const API_URL = "https://baseballcloud-back.herokuapp.com/api/v1/auth";
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
};

export default fetchService;
