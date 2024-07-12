import Head from "next/head";

import AddressForm from "~/components/address-form";
import Navbar from "~/components/navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pudgy Penguin Viewer</title>
        <meta
          name="description"
          content="View Pudgy Penguin NFTs by entering an address. Discover your favorite Pudgy Penguin NFTs in a user-friendly interface."
        />
        <meta
          name="keywords"
          content="Pudgy Penguins, NFTs, blockchain, crypto, view NFTs, NFT address input"
        />
        <meta name="author" content="Your Name" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen flex-col justify-center">
        <Navbar />
        <div className="flex-grow px-12 py-8 dark:bg-slate-900">
          <AddressForm />
        </div>
      </main>
    </>
  );
}
