import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PostTemplateDetails from '../components/PostTemplateDetails'
import SEO from '../components/SEO'

class PostTemplate extends React.Component {
  render() {
    const { title, subtitle } = this.props.data.site.siteMetadata
    const post = this.props.data.markdownRemark
    const { title: postTitle, description: postDescription } = post.frontmatter
    const description = postDescription !== null ? postDescription : subtitle

    const { ogimage } = post.frontmatter
    console.log('ogimage', ogimage)

    const ogImagePath = ogimage && ogimage.publicURL

    return (
      <Layout>
        <div>
          <SEO
            title={`${postTitle} - ${title}`}
            description={description}
            image={ogImagePath}
          />
          <PostTemplateDetails {...this.props} />
        </div>
      </Layout>
    )
  }
}

export default PostTemplate

export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        subtitle
        copyright
        author {
          name
          twitter
        }
        disqusShortname
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        tagSlugs
      }
      frontmatter {
        title
        tags
        date
        description
        ogimage {
          publicURL
        }
      }
    }
  }
`
