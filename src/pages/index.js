import Head from "next/head";
import { Banner, Header, Smallcard } from "../../components";
import axios from "axios";
export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>AirBnb</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h1 className="text-3xl sm:text-4xl  font-semibold pb-5">
            Explore Nearby
          </h1>
          <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data?.map((item, indx) => (
              <Smallcard data={item} key={indx} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const res = await axios.get(
    "https://apigenerator.dronahq.com/api/VFIYAjYu/explore"
  );
  const data = res.data;
  return {
    props: {
      data,
    },
  };
}
