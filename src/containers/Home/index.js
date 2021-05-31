import React from "react";
import { Jumbotron } from "react-bootstrap";
import Layout from "../../components/Layout";

const Home = () => {
  return (
    <Layout>
      <Jumbotron
        className="text-center"
        style={{ margin: "5rem", background: "#fff" }}
      >
        <h1>Welcome to Admin Dashboard</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
          optio, quo placeat animi, suscipit omnis recusandae laborum sequi
          corporis minus inventore voluptas alias veritatis dolore error! Itaque
          deserunt est culpa.
        </p>
      </Jumbotron>
    </Layout>
  );
};

export default Home;
