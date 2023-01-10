import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "itsxas7z",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: true,
  token: process.env.REACT_PUBLIC_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => builder.image(source);
