import Head from "next/head";
import { MongoClient } from "mongodb";
import SelectPumps from "../components/pompy/SelectPump";
import styles from "../styles/Home.module.css";
import Baner from "../components/layout/Baner";

function Home(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>HPC Compare</title>
        <meta name="description" content="Compare Heat Pumps" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Baner />
      <SelectPumps products={props.pumps} />
    </div>
  );
}

export async function getStaticProps() {
  //fetch data from api
  const client = await MongoClient.connect(
    "mongodb+srv://DarGrz:Anakonda22@cluster0.ek4gwl7.mongodb.net/pompy?retryWrites=true&w=majority"
  );
  const db = client.db();
  const pumpsCollection = db.collection("pompy");
  const pumps = await pumpsCollection.find().toArray();
  client.close();

  return {
    props: {
      pumps: pumps.map((p) => ({
        brand: p.brand,
        model: p.model,
        image: p.image,
        power: p.power,
        type: p.type,
        description: p.description,
        height: p.height,
        width: p.width,
        depth: p.depth,
        serial: p.serial,
        weight: p.weight,
        phase: p.phase,
        voltage: p.voltage,
        cycle: p.cycle,
        breaker: p.breaker,
        refrigerant: p.refrigerant,
        refrigerantQuantity: p.refrigerantQuantity,
        description: p.description,
        coolingRange: p.coolingRange,
        dwhRange: p.dwhRange,
        heatingRange: p.heatingRange,
        coolingNoiseLevel: p.coolingNoiseLevel,
        heatingNoiseLevel: p.heatingNoiseLevel,

        id: p._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default Home;
