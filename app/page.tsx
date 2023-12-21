import Image from "next/image";
import Card from "@/components/card/card";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <div
      className={`w-full min-h-screen flex flex-col justify-center items-center gap-10 bg-[#d6e2f0] ${outfit.className} `}
    >
      <Card
        className="w-80 text-center shadow-lg"
        title={`Improve your front-end skills by building projects`}
        content={`Scan the QR code to visit Frontend Mentor and take your coding skills to the next level`}
      />

      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </div>
    </div>
  );
}
