import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Layout from "../components/Layout";
import { postTitle } from "../../main.module.css";

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        body
      }
    }
  }
`;

const Blog = ({ data }) => {
  return (
    <Layout>
      <div>
        {data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>{node.frontmatter.title}</h2>
            <p>Posted: {node.frontmatter.date}</p>
            <MDXRenderer>{node.body}</MDXRenderer>
          </article>
        ))}
      </div>
    </Layout>
  );
};

export default Blog;
