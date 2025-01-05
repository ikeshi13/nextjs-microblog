import Head from "next/head";
import styles from "./Layout.module.css";
import utilStyle from "../../styles/utils.module.css";

const name = "SHIN CODE";
export const siteTitle = "Next.js Blog";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <img src="/images/あざらし.png" className={utilStyle.borderCircle}></img>
        <h1 className={utilStyle.heading2Xl}>{name}</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}
