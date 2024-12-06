import type { GetServerSideProps, InferGetServerSidePropsType } from "next";

import localFont from "next/font/local";
import { SnapContainer } from "@/components/SnapContainer";
import { Header } from "../modules/Header";
import { AppPreview } from "../modules/AppPreview";
import { Achievements } from "../modules/Achievements";
import { Service } from "../modules/Service";
import { Advantages } from "../modules/Advantages";
import { Slogan } from "../modules/Slogan";
import { Partners } from "../modules/Partners";
import { Media } from "../modules/Media";
import { Map } from "../modules/Map";
import { Team } from "../modules/Team";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home({
  repo,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log("repo", repo);
  return (
    <>
      <SnapContainer>
        <Header />
        <Slogan />
        <AppPreview />
        <Partners />
        <Achievements />
        <Service />
        <Team />
        <Advantages />
        <Media />
        <Map />
      </SnapContainer>
    </>
  );
}

type Repo = {
  name: string;
  stargazers_count: number;
};

export const getServerSideProps = (async () => {
  // Fetch data from external API
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/news`);
  const repo: Repo = await res.json();
  // Pass data to the page via props
  return { props: { repo } };
}) satisfies GetServerSideProps<{ repo: Repo }>;
