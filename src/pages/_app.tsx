import "../styles/globals.css";
import type { AppProps } from "next/app";
import ProductView from "../components/productView/ProductView";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
      <ProductView />
    </Layout>
  );
}

export default MyApp;
