/** @format */

import Head from 'next/head';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import Main from '@/components/Main';
import Card from '@/components/Card';
import NavLink from '@/components/header/NavLink';

import styles from '@/styles/header/SideNavigation.module.css';
import Content from '@/components/Content';
export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next Site</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <Header />
      <Main>
        <Content>
          <Card className={styles.menuCard}>
            <h4>Other Sites</h4>
            <NavLink
              className={styles.sideNavLink}
              pathName="/projects"
              displayText="Projects"
            />
            <NavLink
              className={styles.sideNavLink}
              pathName="/Kyles-Cookbook"
              displayText="Cookbook"
            />
          </Card>

          <Card className={styles.menuCard}>
            <h4>Other Sites</h4>
            <NavLink
              className={styles.sideNavLink}
              pathName="/projects"
              displayText="Projects"
            />
            <NavLink
              className={styles.sideNavLink}
              pathName="/Kyles-Cookbook"
              displayText="Cookbook"
            />
          </Card>

          <Card className={styles.menuCard}>
            <h4>Other Sites</h4>
            <NavLink
              className={styles.sideNavLink}
              pathName="/projects"
              displayText="Projects"
            />
            <NavLink
              className={styles.sideNavLink}
              pathName="/Kyles-Cookbook"
              displayText="Cookbook"
            />
          </Card>

          <Card className={styles.menuCard}>
            <h4>Other Sites</h4>
            <NavLink
              className={styles.sideNavLink}
              pathName="/projects"
              displayText="Projects"
            />
            <NavLink
              className={styles.sideNavLink}
              pathName="/Kyles-Cookbook"
              displayText="Cookbook"
            />
          </Card>

          <Card className={styles.menuCard}>
            <h4>Other Sites</h4>
            <NavLink
              className={styles.sideNavLink}
              pathName="/projects"
              displayText="Projects"
            />
            <NavLink
              className={styles.sideNavLink}
              pathName="/Kyles-Cookbook"
              displayText="Cookbook"
            />
          </Card>
          <Card className={styles.menuCard}>
            <h4>Other Sites</h4>
            <NavLink
              className={styles.sideNavLink}
              pathName="/projects"
              displayText="Projects"
            />
            <NavLink
              className={styles.sideNavLink}
              pathName="/Kyles-Cookbook"
              displayText="Cookbook"
            />
          </Card>
        </Content>
        <Footer></Footer>
      </Main>
    </>
  );
}
