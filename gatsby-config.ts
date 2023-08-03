import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Calculadora - Granto Seguros`,
    siteUrl: `https://www.yourdomain.tld`,
    description: `Obtenha tranquilidade financeira com a calculadora de seguros da Granto Seguros. Compare planos, encontre coberturas ideais e proteja o que mais importa. Simples, rápido e seguro. Calcule agora!`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/favicon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
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
        name: "advantages",
        path: `${__dirname}/src/advantages/`,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#4510a3`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Calculadora - Granto Seguros`,
        short_name: `Calculadora`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#4510a3`,
        display: `standalone`,
        icon: `src/images/favicon.png`
      },
    },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: ['Mulish:300,400,500,600,700'],
        },
      },
    },
  ],
};

export default config;
