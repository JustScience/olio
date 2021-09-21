require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Design Leadership Consultant | DesignOps Consulting",
    titleTemplate: ' | Design Consulting',
    description: "DesignOps and UX Strategy Consultant. Design Operations Consulting.",
    keywords: "UX Design Consultant Branding",
    copyright: "Copyright 2021, Galenti Consulting, LLC. All rights reserved.",
    author: "J Galenti",
    contact: "galenticonsulting@gmail.com",
    siteUrl: "https://galenti.design", // No trailing slash allowed!
    image: "/images/socialThumb.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@jgalenti",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_API_KEY, // may instead specify via env, see below
        concurrency: 5, // default, see using markdown and attachments for more information
        tables: [
          {
            baseId: process.env.AIRTABLE_DB,
            tableName: `Jobs`,
          },
        ]
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
