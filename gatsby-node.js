const path = require('path')

exports.createPages = async ({graphql, actions}) => {
    const {data} = await graphql(`
        {
          allMarkdownRemark {
            nodes {
              id
              parent {
                ... on File {
                  id
                  name
                }
              }
            }
          }
        }
    `)

    data.allMarkdownRemark.nodes.forEach(node => {
        actions.createPage({
            path: '/' + node.parent.name,
            component: path.resolve('./src/pages/blog/item.js'),
            context: {id: node.id}
        })
    })


}