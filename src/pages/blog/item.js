import * as React from "react"
import {Contain, Layout} from "../../layouts/layout";
import {graphql} from "gatsby";
import {MDXRenderer} from "gatsby-plugin-mdx";
import Seo from "../../layouts/seo";

const BlogEntry = ({data}) => {
    const title = data.mdx.frontmatter.title
    return (
        <Layout>
            <Seo title={title}/>
            <Contain>
                <h1 className="text-7xl my-10 relative inline-block">
                    <span className="rounded-full absolute left-0 bottom-[4px] h-3 w-full bg-gradient-to-r from-red-500 to-pink-500"></span>
                    <span className='relative'>{title}</span>
                </h1>
                <div className="py-6">
                    <div className='leading-10 prose prose-lg max-w-full'>
                        <MDXRenderer>{data.mdx.body}</MDXRenderer>
                    </div>
                </div>
            </Contain>
        </Layout>
    )
}

export const query = graphql`
    query($id: String) {
      mdx(id: {eq: $id}) {
        frontmatter {
          title
        }
        slug
        body
      }
    }
`

export default BlogEntry
