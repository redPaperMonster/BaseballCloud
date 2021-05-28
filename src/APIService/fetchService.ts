import { SignInPayload, SignUpPayload } from "./types";

import { APIService } from "./APIService";
const API_URL = "https://baseballcloud-back.herokuapp.com/api/v1/auth";
const UPLOAD_URL =
  "https://baseballcloud-back.herokuapp.com/api/v1/s3/signed_url";

const fetchService = {
  signIn: async (payload: SignInPayload) => {
    const res = await APIService.post(`${API_URL}/sign_in`, payload);
    if (!res.errors) {
      setAuthData(res.headers);
    }
    return res;
  },

  validateToken: () => {
    return APIService.get(`${API_URL}/validate_token`);
  },

  signUp: async (payload: SignUpPayload) => {
    const res = await APIService.post(`${API_URL}`, payload);
    if (!res.errors) {
      setAuthData(res.headers);
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
  uploadPhoto: async (
    payload: File | undefined,
    name: { name: string | undefined }
  ) => {
    const signedRes = await APIService.post(`${UPLOAD_URL}`, name);
    const uploadRes = await APIService.put(signedRes.data.signedUrl, payload);
    return uploadRes;
  },
};

const setAuthData = (headers: any) => {
  localStorage.setItem("token", headers["access-token"]);
  localStorage.setItem("client", headers["client"]);
  localStorage.setItem("uid", headers["uid"]);
};
export default fetchService;
