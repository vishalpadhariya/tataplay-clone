import AllChannels from "@/components/AllChannels";
import Link from "next/link";
import tsCatchupChannels from "@/utils/tsCatchupChannels.json";

export default function Home() {
  
  return (
    <>
      <section id="home">
        <h1 className="font-black text-2xl m-4 hover:text-black transition delay-500 cursor-pointer">
          <Link href={`/`}>Tata Play ( Clone )</Link>

          <sub>
            By{" "}
            <a
              href="https://vishalpadhariya.in"
              target="_blank"
              className="animate-pulse"
            >
              Vishal Padhariya
            </a>
          </sub>
        </h1>
        <div className="channel-listing text-lg pt-20 mx-5">
          <AllChannels items={tsCatchupChannels} />
        </div>
      </section>
    </>
  );
}
