import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

function Root() {
  const router = useRouter();
  useEffect(() => {
    console.log(`Component mounted`);
    router.replace("/auth/login");
  }, []);
  return (
    <>
      <Head>
        <title>SCM Online</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/scm-online/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Redirecting...</h1>
      </main>
    </>
  );
}
Root.layout = "none";

export default Root;
