import sanityClient from "@sanity/client";
import imageURLBuilder from "@sanity/image-url";
import getConfig from "next/config";
const { SANITY_TOKEN } = getConfig().serverRuntimeConfig;

export const client = sanityClient({
  projectId: "gjwb6320",
  dataset: "production",
  apiVersion: "2023-01-29",
  useCdn: true,
  token: SANITY_TOKEN,
});

const builder = imageURLBuilder(client);

export const urlFor = (source) => builder.image(source);
