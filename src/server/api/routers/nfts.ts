import { z } from "zod";
import { Network, Alchemy } from "alchemy-sdk";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

const pudgyPenguinContractAddress =
  "0xBd3531dA5CF5857e7CfAA92426877b022e612cf8";

const alchemy = new Alchemy({
  apiKey: process.env.ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
});

export const nftsRouter = createTRPCRouter({
  fetchNFTs: publicProcedure
    .input(z.object({ address: z.string() }))
    .query(async ({ input }) => {
      const nfts = await alchemy.nft.getNftsForOwner(input.address);

      return nfts.ownedNfts.filter(
        (nft) => nft.contract.address === pudgyPenguinContractAddress,
      );
    }),
});
