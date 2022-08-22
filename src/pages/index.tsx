import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ProductView from "../components/productView/ProductView";
import styles from "../styles/Home.module.css";
import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }: any) {
  return (
    <>
      {console.log(allPostsData)}
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/product">
        <a>product</a>
      </Link>
    </>
  );
}
