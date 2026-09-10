import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "HAMENYIMANA Vincent | Software Developer",
    short_name: "HV Portfolio",
    description:
      "Software Developer from Rwanda building practical digital solutions with modern web technologies.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b1120",
    theme_color: "#0b1120",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}