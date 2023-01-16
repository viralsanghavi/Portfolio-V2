import Head from "next/head";
import MainLayout from "../components/MainLayout";
import WorkCards from "../components/WorkCards";

export default function Home() {
  return (
    <>
      <Head>
        <title>Viral Sanghavi</title>
        <meta name="description" content="Viral Sanghavi Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/profile.webp" />
      </Head>
      <main>
        <MainLayout>
          <WorkCards />
        </MainLayout>
      </main>
    </>
  );
}
