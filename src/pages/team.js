import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import styles from './blog.module.css'
import Layout from '../components/layout'
import PersonPreview from '../components/person-preview'

class TeamIndex extends React.Component {
    render() {
        const siteTitle = get(this, 'props.data.site.siteMetadata.title')
        const data = get(this, 'props.data.allContentfulEquipe.nodes')


        return (
            <Layout location={this.props.location}>
                <div style={{ background: '#fff' }}>
                    <Helmet title={siteTitle} />
                    <div className={styles.hero}>{data[0].title}</div>
                    <div className="wrapper">
                        <h2 className="section-headline">Welcome !</h2>
                        <p>{data[0].body.content[0].content[0].value}</p>
                        {/* <ul className="article-list">
                            {data[0].team.map(({ person }) => {
                                return (
                                    <li>
                                        <PersonPreview person={person} />
                                    </li>
                                )
                            })}
                        </ul> */}
                    </div>
                </div>
            </Layout>
        )
    }
}

export default TeamIndex

export const pageQuery = graphql`
    query MyQuery {
        allContentfulEquipe {
            nodes {
              title
              slug
              body {
                content {
                  content {
                    value
                  }
                }
              }
              team {
                name
              }
            }
          }
        }
`