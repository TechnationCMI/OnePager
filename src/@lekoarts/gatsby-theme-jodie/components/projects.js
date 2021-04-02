/** @jsx jsx */
import { jsx } from "theme-ui"
import Img from "gatsby-image"
import Layout from "@lekoarts/gatsby-theme-jodie/src/components/layout"
import SEO from "@lekoarts/gatsby-theme-jodie/src/components/seo"
import GridItem from "@lekoarts/gatsby-theme-jodie/src/components/grid-item"
import locales from "@lekoarts/gatsby-theme-jodie/src/locales"
import { visuallyHidden } from "@lekoarts/gatsby-theme-jodie/src/styles/utils"

const Project = ({ data: { projects }, location }) => (
  <Layout>
    <SEO title="Projects" pathname={location.pathname} />
    <h1 sx={visuallyHidden} data-testid="page-title">
      {locales.projects}
    </h1>
    <div
      sx={{
        display: `grid`,
        gridTemplateColumns: [`1fr`, `1fr 1fr 1fr`],
        gridAutoRows: `30vw`,
      }}
    >
      {projects.nodes.length > 0 ? (
        projects.nodes.map((project) => (
          <GridItem to={project.slug} key={project.slug} data-testid={project.shortTitle}>
            <Img fluid={project.cover.childImageSharp.fluid} />
            <span>{project.shortTitle}</span>
          </GridItem>
        ))
      ) : (
        <div sx={{ padding: 3 }}>No projects found at the location defined for "projectsPath"</div>
      )}
    </div>
  </Layout>
)

export default Project