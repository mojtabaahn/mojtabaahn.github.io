const path = require('path')

exports.createPages = async ({graphql, actions}) => {
    const {data} = await graphql(`
        {
          allMdx {
            nodes {
              id
              slug
            }
          }
        }
    `)

    data.allMdx.nodes.forEach(node => {
        actions.createPage({
            path: '/' + node.slug,
            component: path.resolve('./src/pages/blog/item.js'),
            context: {id: node.id}
        })
    })


}