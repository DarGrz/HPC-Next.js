import Head from "next/head";
import SelectPumps from "../components/pompy/SelectPump";
import styles from "../styles/Home.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "m1",
    producent: "Mitsu",
    pn: "kdfmkdf3434",
  },
  {
    id: "mw",
    producent: "Panas",
    pn: "34ffff3434",
  },
];

function Home(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>HPC Compare</title>
        <meta name="description" content="Compare Heat Pumps" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SelectPumps products={props.products} />
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      products: DUMMY_PRODUCTS,
    },
  };
}

export default Home;
