import * as React from "react"
import {graphql, Link, navigate, useStaticQuery} from "gatsby";
import {Contain, Layout} from "../../layouts/layout";
import {Helmet} from "react-helmet";
import {useEffect} from "react";

const OpenSourceIndex = () => {
    const data = useStaticQuery(graphql`
        query {
          allMdx(sort: {order: DESC, fields: slug}) {
            nodes {
              frontmatter {
                title
              }
              slug
            }
          }
        }
    `)

    let entries = data.allMdx.nodes

    return (
        <Layout>
            <Helmet>
                <title>Mojtabaa H.N. — Blog</title>
            </Helmet>
            <Contain>
                <div className='text-lg my-10'>
                    <p>Hi! My name is Mojtabaa & I'm a web developer. Here is my latest posts about web stuff. Cheers!</p>
                </div>
                <h1 className="text-7xl my-10 relative inline-block">
                    <span className="rounded-full absolute left-0 bottom-[4px] h-3 w-full bg-gradient-to-r from-red-500 to-pink-500"></span>
                    <span className='relative'>Latest Posts</span>
                </h1>
                <div className='grid my-5 divide-y divide-gray-200'>
                    {entries.map(entry => (
                        <Link to={'/' + entry.slug} key={entry.slug} className="py-6">
                            <div className='text-xl'>{entry.frontmatter.title}</div>
                        </Link>
                    ))}
                </div>
            </Contain>
        </Layout>
    )
}
const Redirect = () => {
    useEffect(() => {
        async function redirect() {
            return await navigate('/01-hello-world');
        }

        redirect()
    }, [])
    return null
}

export default Redirect
