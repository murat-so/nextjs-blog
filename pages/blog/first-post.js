import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../../components/layout'

export default function FirstPost(){
    return (
        <Layout post>
            <Head>
                <title>First Post | { siteTitle }</title>
            </Head>
            
            <h1>First Post</h1>
            
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione sunt maxime magni illo deleniti, veniam delectus explicabo ad facere officiis qui veritatis, nihil saepe. Repellat necessitatibus sed earum dolor temporibus? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione sunt maxime magni illo deleniti, veniam delectus explicabo ad facere officiis qui veritatis, nihil saepe. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione sunt maxime magni illo deleniti, veniam delectus explicabo ad facere officiis qui veritatis, nihil saepe.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione sunt maxime magni illo deleniti, veniam delectus explicabo ad facere officiis qui veritatis, nihil saepe.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione sunt maxime magni illo deleniti, veniam delectus explicabo ad facere officiis qui veritatis, nihil saepe.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione sunt maxime magni illo deleniti, veniam delectus explicabo ad facere officiis qui veritatis, nihil saepe.</p>
        </Layout>
    )
}