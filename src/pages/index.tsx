/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { skipToken } from "@tanstack/react-query";
import Head from "next/head";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import AddressForm from "~/components/address-form";
import Navbar from "~/components/navbar";
import Spinner from "~/components/ui/spinner";
import { api } from "~/utils/api";

export default function Home() {
  const [address, setAddress] = useState("");
  const onSubmit = (values: { address: string }) => {
    setAddress(values.address);
  };

  const query = api.nfts.fetchNFTs.useQuery(!address ? skipToken : { address });

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
          <AddressForm onSubmit={onSubmit} />
          <div className="mt-10">
            {query.isLoading && <Spinner className="h-12 w-12" />}
            {query.isError && <div>Error: {query.error.message}</div>}
            {query.data && (
              <div className="grid grid-cols-4">
                {query.data.map((nft) => (
                  <Card className="overflow-hidden" key={nft.tokenId}>
                    <div>
                      <img className="w-full" src={nft.image.pngUrl} />
                    </div>
                    <CardHeader>
                      <CardTitle>{nft.name}</CardTitle>
                      <CardDescription>
                        <div>
                          <p>{nft.raw.metadata.description}</p>
                        </div>
                        From {nft.collection?.name}
                      </CardDescription>
                    </CardHeader>
                    <CardContent></CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
