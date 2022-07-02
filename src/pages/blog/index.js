import * as React from "react"
import {graphql, Link, useStaticQuery} from "gatsby";
import {Contain, Layout} from "../../layouts/layout";
import {Helmet} from "react-helmet";
import {useState} from "react";

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
                    {entries.map((entry, index) => <Entry key={index} entry={entry} index={entries.length - index}/>)}
                </div>
            </Contain>
        </Layout>
    )
}

const Entry = ({entry, index}) => {
    const [entered, setEntered] = useState(false)
    const mouse_over_callback = () => {
        setEntered(true)
    }
    const mouse_leave_callback = () => {
        setEntered(false)
    }
    return (
        <Link
            onMouseEnter={mouse_over_callback}
            onMouseLeave={mouse_leave_callback}
            to={'/' + entry.slug}
            className="py-6"
        >
            <div className='text-xl'>
                <div className={'rounded text-white font-bold inline-block px-2 mr-1 ' + `${entered ? 'bg-red-500' : 'bg-gray-900'}`}>{('0000' + index).slice(-2)}</div>
                <div className='inline-block'>{entry.frontmatter.title}</div>
            </div>
        </Link>
    )
}
export default OpenSourceIndex