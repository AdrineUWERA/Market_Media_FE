import "../styles/globals.css";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Head from "next/head";
import UserProvider from "../src/Context/UserContext";
import EditProfileProvider from "../src/Context/EditeProfileContext";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Market Media</title>
        <meta name="description" content="Welcome to market media" />
      </Head>

      <ApolloProvider client={client}>
        <UserProvider>
          <EditProfileProvider>
          <Component {...pageProps} />
          </EditProfileProvider>
        </UserProvider>
      </ApolloProvider>
    </>
  );
}

export default MyApp;
