require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    // Default title of the page
    siteTitleAlt: `Technation`,
    // Can be used for e.g. JSONLD
    siteHeadline: `Technation - Telepresence robot`,
    // Used for SEO
    siteDescription: `Technation improves the current telepresence Boki robot with sound.`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/banner.jpg`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-jodie`,
      // See the theme's README for all available options
      options: {
        navigation: [
          { name: `Concepten`, slug: `/concepten` },
          { name: `Stappen`, slug: `/projects` },
          { name: `Proces`, slug: `/proces` },
          { name: `Team`, slug: `/team` },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `jodie - @lekoarts/gatsby-theme-jodie`,
        short_name: `jodie`,
        description: `Image-heavy photography portfolio with colorful accents & customizable pages. Includes adaptive image grids powered by CSS grid and automatic image integration into projects.`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#b75e09`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-netlify`,
  ],
}
