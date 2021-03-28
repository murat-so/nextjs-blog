import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout blog>
      <Head>
        <title>Blog | {siteTitle}</title>
      </Head>
      <section>
    <br/>
          <Link href="blog/first-post"><a>First Post</a></Link><br/>
      </section>
    </Layout>
  )
}
