module.exports = {
    siteMetadata: {
        title: `Mojtabaa H.N.`,
        siteUrl: `https://mojtabaahn.github.io`
    },
    plugins: [
        'gatsby-plugin-postcss',
        // {
        //     resolve: 'gatsby-plugin-google-analytics',
        //     options: {
        //         "trackingId": "HelloWorld"
        //     }
        // },
        "gatsby-plugin-image",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        // "gatsby-plugin-mdx",
        {
            resolve: "gatsby-transformer-remark",
            options: {
                plugins : [
                    'gatsby-remark-prismjs'
                ]
            }
        },
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        'gatsby-plugin-mdx-frontmatter',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "blog",
                "path": "./feed/"
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "images",
                "path": "./src/images/"
            },
            __key: "images"
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "pages",
                "path": "./src/pages/"
            },
            __key: "pages"
        }
    ]
};