import Layout, { siteTitle } from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'



export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
      paths,
      fallback: false
    }
  }

export default function Post({ postData }) {
    return (
      <Layout>
        <Head>
            <title>{postData.title} | { siteTitle }</title>
            <style global>
                {`
                  h1, h2, h3, h4, h5, h6 {
                    font-size: revert!important;
                    font-weight: revert!important;
                  }
                `}
            </style>
        </Head>
        {postData.title}
        <br />
        <Date dateString={postData.date} />
        <br />
        {postData.id}
        <br />
        
        <div id="md-content" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />

        </Layout>
    )
  }
  

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
      props: {
        postData
      }
    }
  }