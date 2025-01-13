import Head from "next/head";
import styles from "./Layout.module.css";
import utilStyle from "../../styles/utils.module.css";
import Link from "next/link";

const name = "SHIN CODE";
export const siteTitle = "Next.js Blog";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img src="/images/あざらし.png" className={`${utilStyle.borderCircle} ${styles.headerHomeImage}`}></img>
            <h1 className={utilStyle.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <img src="/images/あざらし.png" className={`${utilStyle.borderCircle} ${styles.headerOtherImage}`}></img>
            <h1 className={utilStyle.heading2Xl}>{name}</h1>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">←　ホームへ戻る</Link>
        </div>
      )}
    </div>
  );
}
