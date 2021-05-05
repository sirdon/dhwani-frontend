import React, { useEffect, useState, useContext } from "react";
import Link from "next/link";
import Header from "./components/Header";
import Table from "./components/Table";
import Button from "react-bootstrap/Button";
import { UserContext } from "./userContaxt";
const controller = new AbortController();
const { signal } = controller;

function page1() {
  const { user, setUser } = useContext(UserContext);
  const getdata = () => {
    fetch("http://localhost:3000/api/hello", { method: "get", signal: signal })
      .then((res) => res.json())
      .then((data) => {
        setUser(data.users);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    if (user.length < 1) {
      getdata();
    }
  }, []);
  const cancelApiReq = () => {
    controller.abort();
  };

  return (
    <div>
      <Header title="Responsive Table" />
      <div className="container">
        <Link href="/page2">
          <Button variant="primary" className="button" onClick={cancelApiReq}>
            Go to Page 2
          </Button>
        </Link>
        {user.length < 1 ? (
          <h1 className="loading">Loading...</h1>
        ) : (
          <Table
            tableData={user}
            headingColumns={[
              "Id",
              "Name",
              "Username",
              "Email",
              "Phone",
              "Website",
            ]}
            title="User Data"
            breakOn="large"
          />
        )}
      </div>
    </div>
  );
}

export default page1;
