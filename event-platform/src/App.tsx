import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";

import { client } from "./configs/apollo";
import { Router } from "./Router";

export function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  );
}
