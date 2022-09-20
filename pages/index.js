import Head from "next/head";
import SelectPump from "../components/pompy/SelectPump";
import styles from "../styles/Home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>HPC Compare</title>
        <meta name="description" content="Compare Heat Pumps" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SelectPump />
    </div>
  );
}

export default Home;
