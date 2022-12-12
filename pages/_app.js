import "../styles/globals.css";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import ProductProvider from "../src/Components/addProduct";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ApolloProvider client={client}>
        <ProductProvider>
          <Component {...pageProps} />
        </ProductProvider>
      </ApolloProvider>
    </>
  );
}

export default MyApp;
