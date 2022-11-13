import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import * as styles from './index.module.css';
import NavBar from "../components/navbar/NavBar";
import IntroArea from "../components/introarea/IntroArea";
import PersonalInfoCard from "../components/personalinfocard/PersonalInfoCard";


const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <NavBar />
      <section className={styles.introsection}>
        <IntroArea />
        <PersonalInfoCard />
      </section>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>bschulz.dev</title>
