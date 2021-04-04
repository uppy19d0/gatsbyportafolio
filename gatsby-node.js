const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const result =await graphql(`
    {
      allEducationJson {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  result.data.allEducationJson.edges.forEach(element => {
    const { node } = element
    console.log("BIENVE ALGO GRANDE!!!!!!!!!!!!!!!!!!")
    console.log(element);
    console.log(node);
    actions.createPage({
      path: node.slug,
      component: path.resolve("./src/templates/template.js"),
      context: {
        slug: node.slug,
      },
    });
  })
}
