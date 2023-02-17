import Head from "next/head";
import Image from "next/image";

import {
  Alert,
  Button,
  Card,
  Col,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";
import profilePic from "/public/logo-prasetiyamulya.png";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    // if (form.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
    // }

    setValidated(true);
  };

  //   useEffect(() => {
  //     handleSubmit();
  //   }, []);

  return (
    <>
      <Head>
        <title>Login - SCM</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/next-scm/favicon.ico" />
      </Head>
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <Card body className="shadow rounded" style={{ width: "600px" }}>
          <Row>
            <Col className="text-center">
              <Image
                src={profilePic}
                alt="logo"
                className="login-logo"
                priority
              />
            </Col>
          </Row>
          <div>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col} md="5" controlId="validationCustom01">
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="First name"
                    defaultValue="Mark"
                  />
                  <Form.Control.Feedback type="invalid">
                    E-mail is required
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  as={Col}
                  md="5"
                  controlId="validationCustomUsername"
                >
                  <Form.Label>Username</Form.Label>
                  <InputGroup>
                    <Form.Select>
                      <option value="@prasetiyamulya.ac.id">
                        @prasetiyamulya.ac.id
                      </option>
                      <option value="@pmbs.ac.id">@pmbs.ac.id</option>
                    </Form.Select>
                  </InputGroup>
                </Form.Group>
              </Row>
              <Button type="submit">Submit form</Button>
            </Form>
          </div>
        </Card>
      </div>
    </>
  );
}
