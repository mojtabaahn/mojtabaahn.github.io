import * as React from "react"
import {graphql, Link, useStaticQuery} from "gatsby";
import {Contain, Layout} from "../layouts/layout";
import {Helmet} from "react-helmet";
import {useState} from "react";

const FeedPage = () => {
    const data = useStaticQuery(graphql`
        {
          allMarkdownRemark(sort: {order: DESC, fields: fileAbsolutePath}) {
            nodes {
              id
              html
              parent {
                ... on File {
                  id
                  name
                }
              }
              frontmatter {
                title
                date
                link
              }
            }
          }
        }
    `)

    let entries = data.allMarkdownRemark.nodes

	return (
        <Layout>
            <Helmet>
                <title>Mojtabaa H.N. — Feed</title>
            </Helmet>
            <Contain>
                <div className='space-y-16 py-10'>
                    {entries.map((entry, index) => <Entry key={index} entry={entry} index={entries.length - index}/>)}
                </div>
            </Contain>
        </Layout>
	)
}

const Entry = ({entry, index}) => {
    return (
    	<div>
			<h1 className="text-5xl relative inline-block">
				<span className="rounded-full absolute left-0 bottom-[-6px] h-2 w-full bg-gradient-to-r from-red-500 to-pink-500"></span>
				<span className='relative'>{entry.frontmatter.title}</span>
			</h1>
			<div className="pt-6">
				<div className='leading-10 prose lg:prose-lg max-w-full' dangerouslySetInnerHTML={{__html: entry.html}}>
				</div>
				{entry.frontmatter.link !== '' && (
					<div className='block pt-4'>
						<a href={entry.frontmatter.link} className='text-red-500 text-lg border-b-2 border-red-500'>Read More</a>
					</div>
				)}
			</div>
    	</div>
    )
}

export default FeedPage