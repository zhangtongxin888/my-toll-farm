import type { Metadata } from "next";

const OG_IMAGE = {
  url: "/og.png",
  width: 1672,
  height: 941,
  alt: "My Toll Farm beginner guide with a stylized toll road and cars",
};

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const socialTitle = `${title} | My Toll Farm Guide`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      url: path,
      title: socialTitle,
      description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: ["/og.png"],
    },
  };
}
