import { z } from "zod";
import { z } from "zod";

const openSeaMetadataSchema = z.object({
  floorPrice: z.number(),
  collectionName: z.string(),
  collectionSlug: z.string(),
  safelistRequestStatus: z.string(),
  imageUrl: z.string(),
  description: z.string().nullable(),
  externalUrl: z.string().nullable(),
  twitterUsername: z.string().nullable(),
  discordUrl: z.string().nullable(),
  bannerImageUrl: z.string().nullable(),
  lastIngestedAt: z.string(),
});

const contractSchema = z.object({
  address: z.string(),
  name: z.string(),
  symbol: z.string(),
  totalSupply: z.string().nullable(),
  tokenType: z.string(),
  contractDeployer: z.string(),
  deployedBlockNumber: z.number(),
  openSeaMetadata: openSeaMetadataSchema,
  isSpam: z.any().nullable(),
  spamClassifications: z.array(z.any()),
});

const imageSchema = z.object({
  cachedUrl: z.string(),
  thumbnailUrl: z.string(),
  pngUrl: z.string(),
  contentType: z.string(),
  size: z.number(),
  originalUrl: z.string(),
});

const rawSchema = z.object({
  tokenUri: z.string(),
  metadata: z.object({
    attributes: z.array(
      z.object({
        trait_type: z.string(),
        value: z.string(),
      }),
    ),
    description: z.string(),
    image: z.string(),
    name: z.string(),
  }),
  error: z.any().nullable(),
});

const collectionSchema = z.object({
  name: z.string(),
  slug: z.string(),
  externalUrl: z.string().nullable(),
  bannerImageUrl: z.string(),
});

const mintSchema = z.object({
  mintAddress: z.string().nullable(),
  blockNumber: z.number().nullable(),
  timestamp: z.string().nullable(),
  transactionHash: z.string().nullable(),
});

const acquiredAtSchema = z.object({
  blockTimestamp: z.string().nullable(),
  blockNumber: z.number().nullable(),
});

export const nftSchema = z.object({
  contract: contractSchema,
  tokenId: z.string(),
  tokenType: z.string(),
  name: z.string(),
  description: z.string(),
  tokenUri: z.string(),
  image: imageSchema,
  raw: rawSchema,
  collection: collectionSchema,
  mint: mintSchema,
  owners: z.any().nullable(),
  timeLastUpdated: z.string(),
  balance: z.string(),
  acquiredAt: acquiredAtSchema,
});
