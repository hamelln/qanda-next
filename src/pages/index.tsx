import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ProductView from "../components/productView/ProductView";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/ProductView">
        <a>ProductView</a>
      </Link>
    </>
  );
};

export default Home;
