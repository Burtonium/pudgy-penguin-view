import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const nftsRouter = createTRPCRouter({
  fetchNFTs: publicProcedure
    .input(z.object({ address: z.string() }))
    .query(({ input }) => {
      return "Suh dude";
    }),
});
