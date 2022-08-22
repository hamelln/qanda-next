import React from "react";
import Head from "next/head";
import Link from "next/link";

const FirstPost = () => {
  return (
    <>
      <Head>
        <title>Team QANDA | 콴다 회사소개</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
};

export default FirstPost;
