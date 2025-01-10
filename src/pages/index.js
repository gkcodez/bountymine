import Layout from '@theme/Layout';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import HeaderImage from '@site/static/img/undraw_read-notes.svg';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Home`}
      description="Bug bounty tutorial for beginners">
      <main>
        <div className={styles.jumbotron}>
          <HeaderImage title="Header Image" className="bannerimage" width={250} height={250} />
          <Heading as="h1" className="hero__title">
            {siteConfig.title}
          </Heading>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/category/pre-security">
              Take me to the guide 📕
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}
