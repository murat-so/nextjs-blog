import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Home | {siteTitle}</title>
      </Head>
      <section>
          <p>Hi, I'm Murat. Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          <p>Excepturi inventore dicta et ex quaerat voluptates facere dolorem laborum cumque dolores aliquam cum neque reiciendis. Go to my <Link href="blog"><a>Blog</a></Link>.</p>
      </section>
      <section>
          <Link href="#"><a>Twitter</a></Link>&nbsp;&nbsp;&nbsp;
          <Link href="#"><a>Linkedin</a></Link>&nbsp;&nbsp;&nbsp;
          <Link href="#"><a>Github</a></Link>&nbsp;&nbsp;&nbsp;
          <Link href="#"><a>Mail</a></Link>&nbsp;&nbsp;&nbsp;
      </section>
    </Layout>
  )
}
