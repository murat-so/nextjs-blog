import Head from 'next/head'
import styles from './layout.module.css'
import Image from 'next/image'
import Link from 'next/link'

export const siteTitle = 'Next'

export default function Layout({children, home, post, blog}){
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                name="description"
                content=""
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>

            {blog &&(
                <div className={styles.backToHome}>
                <Link href="/">
                    <a>← Back to home</a>
                </Link>
                </div>
            )}
            {post && (
                <div className={styles.backToHome}>
                <Link href="/blog">
                    <a>← Back to blog</a>
                </Link>
                </div>
            )}

            {home && (
                <header className={styles.header}>
                    <h1>murat-so</h1>
                </header>
            )}
            
            <main>{children}</main>
            
            

        </div>
    )
}