import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Layout from "./components/Layout";
import utilStyle from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout>
      <section className={utilStyle.headingMd}>
        <p>これはテストプロフィールです</p>
      </section>

      <section className={`${utilStyle.headingMd} ${utilStyle.padding1px}`}>
        <h2>📝エンジニアのブログ　テスト</h2>
        <div className={styles.grid}>
          <article>
            <Link href="/">
              <img src="/images/thumbnail01.jpg" className={styles.thumbnailImage}></img>
            </Link>
            <Link href="/" className={utilStyle.boldText}>
              テスト投稿01
            </Link>
            <br />
            <small className={utilStyle.lightText}>Febuary 23,2024</small>
          </article>
          <article>
            <Link href="/">
              <img src="/images/thumbnail01.jpg" className={styles.thumbnailImage}></img>
            </Link>
            <Link href="/" className={utilStyle.boldText}>
              テスト投稿01
            </Link>
            <br />
            <small className={utilStyle.lightText}>Febuary 23,2024</small>
          </article>
          <article>
            <Link href="/">
              <img src="/images/thumbnail01.jpg" className={styles.thumbnailImage}></img>
            </Link>
            <Link href="/" className={utilStyle.boldText}>
              テスト投稿01
            </Link>
            <br />
            <small className={utilStyle.lightText}>Febuary 23,2024</small>
          </article>
          <article>
            <Link href="/">
              <img src="/images/thumbnail01.jpg" className={styles.thumbnailImage}></img>
            </Link>
            <Link href="/" className={utilStyle.boldText}>
              テスト投稿01
            </Link>
            <br />
            <small className={utilStyle.lightText}>Febuary 23,2024</small>
          </article>
        </div>
      </section>
    </Layout>
  );
}
