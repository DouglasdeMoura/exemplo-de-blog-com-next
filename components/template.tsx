import Head from "next/head"
import Header from "./header"
import styles from "../styles/Template.module.css"
import Footer from "./footer";

const Template = ({ children }) => {
  return (
    <div className={styles.page}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Template;
