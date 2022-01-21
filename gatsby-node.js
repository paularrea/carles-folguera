const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query Projects {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  const projects = data.allMarkdownRemark.nodes

  projects.forEach((project, index) => {
    const previous =
      index === projects.length - 1 ? null : projects[index + 1].frontmatter
    const next = index === 0 ? null : projects[index - 1].frontmatter
    actions.createPage({
      path: project.frontmatter.slug,
      component: path.resolve("./src/templates/project-details.js"),
      context: {
        slug: project.frontmatter.slug,
        previous,
        next,
      },
    })
  })
}