"use client";
import { encrypt } from "@/utils/secure";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Genre from "./Genre";
const AllChannels = ({ items }) => {
  const [sliceVal, setSliceVal] = useState(18);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [channels, setChannels] = useState(items);

  const genres = items.map((channel) => channel.channel_genre);
  const uniqueGenre = genres.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });

  const handleGenreChange = (option) => {
    const filterdChannels = items.filter(
      (channel) => channel.channel_genre === option
    );
    setChannels(filterdChannels);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Check if the user is scrolling down or up
      if (currentScrollPos > prevScrollPos) {
        // Scrolling down: Increase sliceVal by 18
        setSliceVal((prevSliceVal) => prevSliceVal + 18);
      }
      /* else {
        // Scrolling up: Decrease sliceVal by 18, but not below 18
        setSliceVal((prevSliceVal) => Math.max(prevSliceVal - 18, 18));
      } */

      // Update the previous scroll position
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sliceVal, prevScrollPos, channels]);

  return (
    <>
      <div className="flex justify-center py-5">
        <Genre options={uniqueGenre} onSelect={handleGenreChange} />
      </div>
      <div className="grid grid-cols-6 gap-8">
        {channels.length > 0 &&
          channels.slice(0, sliceVal).map((item, i) => (
            <Link
              href={`/live/${encrypt(item.channel_id)}`}
              key={i}
              className="bg-slate-500 p-5 hover:scale-110 hover:text-white transition-transform cursor-grab rounded-lg broadcast"
              data-category={item.channel_genre}
            >
              <div className="flex justify-center">
                <Image
                  className="rounded-full"
                  src={`${
                    item?.channel_logo
                      ? item?.channel_logo
                      : "/images/placeholder.png"
                  }`}
                  alt="tataplay-clone"
                  height={150}
                  width={150}
                />
              </div>
              <h2 className="leading-loose capitalize">{item?.channel_name}</h2>
            </Link>
          ))}
      </div>
    </>
  );
};

export default AllChannels;
