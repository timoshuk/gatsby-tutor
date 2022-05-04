import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../components/Layout";

import { postTitle } from "../../main.module.css";

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile {
        nodes {
          name
        }
      }
    }
  `);

  return (
    <Layout>
      <div>
        {data.allFile.nodes.map((item) => (
          <h2 className={postTitle}>{item.name}</h2>
        ))}
      </div>
    </Layout>
  );
};

export default Blog;
