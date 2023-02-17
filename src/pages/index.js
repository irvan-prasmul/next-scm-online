import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

import { useRouter } from "next/router";
// import { Container, Row, Col } from "react-bootstrap";
import React, { useState, useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    console.log(`Component mounted`);
    router.replace("/auth/login");
  }, [router]);
  return (
    <>
      <Head>
        <title>SCM Online</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/next-scm/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <p>You should not be here!!!</p>
        {/* <Container fluid>
          <Row>
            <Col>
              <p>You should not be here!!!</p>
            </Col>
          </Row>
        </Container> */}
      </main>
    </>
  );
}
