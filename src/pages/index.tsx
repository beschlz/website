import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import * as styles from './index.module.css';


const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className={styles.page}>

    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>bschulz.dev</title>
