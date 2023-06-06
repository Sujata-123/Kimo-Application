import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Highlights from "../components/HighLight";
import Categories from "../components/Categories";
import TravelGuide from "../components/TravelGuide";
import { HomeProps, Highlight } from "../components/types";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const Home: NextPage<HomeProps> = ({ highlights }) => {
  return (
    <div>
      <Head>
        <title>KIMO APPLICATION</title>
        <meta name="description" content="Kimo Application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-start justify-center lg:w-[80%] m-auto mt-10 md:w-full w-full overflow-x-scroll">
        <h1 className="text-3xl font-bold mb-4">Highlights</h1>
        <Highlights highlights={highlights} />
      </div>
      <div className="lg:flex-row md:flex-row flex flex-col w-full m-auto gap-4 mt-10 bg-[#E6F2F2] lg:w-[80%] md:w-[80%] items-start py-24 px-14 mb-7">
        <Categories name={""} activities={[]} />
        <TravelGuide />
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<HomeProps> = async (context) => {
  const res = await fetch("https://web-dev.dev.kimo.ai/v1/highlights");
  const data = await res.json();
  const highlights: Highlight[] = data;

  return {
    props: {
      highlights,
    },
  };
};

export default Home;
