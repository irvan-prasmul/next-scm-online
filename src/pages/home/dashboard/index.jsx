import Head from "next/head";
import styles from "@/styles/Home.module.css";

import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

export default function Dashboard() {
  const router = useRouter();
  //   useEffect(() => {
  //     console.log(`Component mounted`);
  //     router.replace("/auth/login");
  //   }, [router]);
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/next-scm/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <p>Dashboard carousel</p>
      </main>
    </>
  );
}
