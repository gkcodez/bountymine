import Layout from '@theme/Layout';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import HeaderImage from '@site/static/img/undraw_reading.svg';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Home`}
      description="Bug bounty tutorial for beginners">
      <main>
        <div className={styles.homepage}>
          <div className={styles.jumbotron}>
            <HeaderImage title="Header Image" className={styles.bannerimage} />
            <Heading as="h1" className={styles.title}>
              {siteConfig.title}
            </Heading>
            <p className={styles.subtitle}>{siteConfig.tagline}</p>
            <Link
              className={styles.button}
              to="/docs/category/pre-security">
              Take me to the guide 📕
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}
