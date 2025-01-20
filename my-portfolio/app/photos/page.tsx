import React from "react";
import type { Metadata } from "next";
import { ImageGrid } from "app/components/image-grid";

export const metadata: Metadata = {
  title: "Photos",
  description: "My Photos",
};

export default function Photos() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Camera roll 📸</h1>
      <ImageGrid
        columns={3}
        images={[
          {
            src: "/photos/_DSC8685_Original.jpg",
            alt: "Indian Roller",
            href: "",
          },
          {
            src: "/photos/_DSC8694_Original.jpg",
            alt: "Brahminy Kite",
            href: ""
          },
          {
            src: "/photos/_DSC8734_Original.jpg",
            alt: "Indian Roller 2",
            href: ""
          },
          {
            src: "/photos/_DSC8738_Original.jpg",
            alt: "Indian Roller 3",
            href: ""
          },
          {
            src: "/photos/_DSC8750_Original.jpg",
            alt: "Steppe Eagle",
            href: ""
          },
          {
            src: "/photos/brooklyn_bridge.jpg",
            alt: "Brooklyn Bridge",
            href: ""
          },
          {
            src: "/photos/snow_brandywine.jpg",
            alt: "Snow at Brandywine",
            href: ""
          },
          {
            src: "/photos/times_square.jpg",
            alt: "Times Square",
            href: ""
          },
          {
            src: "/photos/tree.jpg",
            alt: "Christmas in NYC",
            href: ""
          },
        ]}
      />

      {/* <ImageGrid
        columns={2}
        images={[
          { src: "/photos/photo1.jpg", alt: "Indian Roller" },
          { src: "/photos/photo2.jpg", alt: "Steppe Eagle" },
          { src: "/photos/photo3.jpg", alt: "Times Square" },
          { src: "/photos/photo4.jpg", alt: "Brooklyn Bridge" },
        ]}
      />

      <ImageGrid
        columns={4}
        images={[
          { src: "/photos/photo1.jpg", alt: "Indian Roller" },
          { src: "/photos/photo2.jpg", alt: "Steppe Eagle" },
          { src: "/photos/photo3.jpg", alt: "Times Square" },
          { src: "/photos/photo4.jpg", alt: "Brooklyn Bridge" },
          { src: "/photos/photo5.jpg", alt: "Snow at Brandywine" },
          { src: "/photos/photo6.jpg", alt: "Christmas in NYC" },
        ]}
      /> */}
    </section>
  );
}
