import "./App.css";
import React from "react";
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { MainRoute } from "./Routes";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./Store/store";
import { BrowserRouter as Router } from "react-router-dom";

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

const createApolloClient = () => {
  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache({
      addTypename: false,
    }),
    connectToDevTools: true,
  });
};

function App() {
  const client = createApolloClient();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ApolloProvider client={client}>
          <Router>
            <MainRoute />
          </Router>
        </ApolloProvider>
      </PersistGate>
    </Provider>
  );
}
export default App;
