import Head from "next/head";
import { About } from "../components/About/About";
import { Contact } from "../components/Contact/Contact";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Hero } from "../components/Hero/Hero";
import { Information } from "../components/Information/Information";
import { Pricing } from "../components/Pricing/Pricing";
import { Service } from "../components/Service/Service";
import { getSettings } from "../utils/setting";
import { InferGetStaticPropsType } from "next";
import { Food } from "../components/food/food";
import Langue from "../components/langue/Langue";
import Totalable from "../components/Totalable/Totalable";
import { LakeVilla } from "../components/LakeVilla/LakeVilla";
import Interior from "../components/Interior/Interior";
import { Sitetour } from "../components/Sitetour/Sitetour";
import { Experience } from "../components/Experience/Experience";
import { Questions } from "../components/Questions/Questions";
import { Residences } from "../components/Residences/Residences";
import { HillVilla } from "../components/HillVilla/HillVilla";
import { BeachVilla } from "../components/BeachVilla/BeachVilla";

export default function Home({
  navigation,
  hero,
  information,
  about,
  service,
  pricing,
  langue,
  food,
  contact,
  totalable,
  lakevilla,
  hillvilla,
  beackvilla,
  sitetour,
  question,
  residences,
  footer,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <Head>
          <title>Marketing campaigns</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
      </Head>
      <Header {...navigation} />
      <Hero {...hero} />
      <Information {...information} />
      <Service {...service} />
      <About {...about} />
      <Pricing {...pricing} />
      <Food {...food} />
      <Langue {...langue} />
      <Contact {...contact} />
      <Totalable {...totalable} />
      <LakeVilla {...lakevilla} />
      <BeachVilla {...beackvilla} />
      <HillVilla {...hillvilla} />
      <Interior />
      <Sitetour {...sitetour} />
      <Experience />
      <Questions {...question} />
      <Residences {...residences} />
      <Footer {...footer} />
    </>
  );
}

export async function getStaticProps() {
  const {
    navigation,
    hero,
    information,
    about,
    service,
    pricing,
    langue,
    food,
    contact,
    totalable,
    lakevilla,
    hillvilla,
    beackvilla,
    sitetour,
    question,
    residences,
    footer,
  } = getSettings();
  return {
    props: {
      navigation,
      hero,
      information,
      about,
      service,
      pricing,
      langue,
      food,
      contact,
      totalable,
      lakevilla,
      hillvilla,
      beackvilla,
      sitetour,
      question,
      residences,
      footer,
    },
  };
}
