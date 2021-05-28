import { createHttpLink, DefaultOptions } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: `https://baseballcloud-back.herokuapp.com/api/v1/graphql`,
});
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");
  const client = localStorage.getItem("client");
  const uid = localStorage.getItem("uid");
  return {
    headers: {
      ...headers,
      "access-token": token || "",
      client: client || "",
      uid: uid || "",
    },
  };
});
export const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: "no-cache",
  },
  query: {
    fetchPolicy: "no-cache",
  },
};

export const apolloLink = authLink.concat(httpLink);
