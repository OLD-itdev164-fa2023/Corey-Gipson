module.exports = {
  siteMetadata: {
    title: `Gatsby Blog`,
    description: `ITDEV-164 Gatsby Blog.`,
    author: `Corey Gipson`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
    contact: {
      name: 'Corey Gipson',
      company: 'Blogs Inc.',
      address: 'PO Box 1234'
    }
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: 'gatsby-source-contentful', 
      options: {
        spaceId: 'hmigrifcke6l8',
        accessToken: 'jf1r_VPBttRFjy1E1_HR-6E3eIoM1gdFedwpCHyTFbA'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
