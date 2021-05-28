import "./App.css";
import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { MainRoute } from "./Routes";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./Store/store";
import { BrowserRouter as Router } from "react-router-dom";
import { apolloLink, defaultOptions } from "./Utils/apolloConfig";

const createApolloClient = () => {
  return new ApolloClient({
    link: apolloLink,
    cache: new InMemoryCache({
      addTypename: false,
    }),
    defaultOptions: defaultOptions,
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
