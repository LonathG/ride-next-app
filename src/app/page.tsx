import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "RIDE Drink — Fuel Your Hustle",
    description: "A bold new energy drink for creators, athletes, and thinkers. No junk, just clean energy.",
    openGraph: {
      title: "RIDE Drink — Fuel Your Hustle",
      images: [{ url: "/images/ride-og-image.jpg" }],
    },
  };
}

export default async function Index() {
  const client = createClient();
  const home = await client.getByUID("page", "home");

  return <SliceZone slices={home.data.slices} components={components} />;
}
