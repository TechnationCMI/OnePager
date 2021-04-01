/** @jsx jsx */
import { jsx, Heading } from "theme-ui";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "@lekoarts/gatsby-theme-jodie/src/components/layout";
import SEO from "@lekoarts/gatsby-theme-jodie/src/components/seo";

const Project = ({ data: { project, images }, location }) => (
  <Layout color={project.color || undefined}>
    <SEO
      title={project.title}
      description={project.excerpt}
      pathname={location.pathname}
      image={project.cover.childImageSharp.resize.src}
    />
    <div sx={{ variant: `content.project` }}>
      <div sx={{ fontSize: 2, textTransform: `uppercase`, letterSpacing: `wider`, mb: 2 }}>{project.category}</div>
      <Heading as="h1" variant="styles.h1" sx={{ mt: 0 }}>
        {project.title}
      </Heading>
      <div sx={{ maxWidth: `70ch`, my: 4 }}>
        <MDXRenderer>{project.body}</MDXRenderer>
      </div>
    </div>
  </Layout>
)

export default Project
