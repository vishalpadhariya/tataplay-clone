"use client";

import { useEffect } from "react";
import JWPlayer from "@jwplayer/jwplayer-react";

const TSWatchNow = ({ preData, sk, resData }) => {
  const defaultConfig = {
    logo: {
      file: `https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_150,w_150/${preData?.channel_logo}`,
      position: "top-right",
      hide: true,
    },
    autostart: false,
    controls: true,
    pipIcon: "disabled",
    abouttext: "Vishal Padhariya",
    aboutlink: "https://vishalpadhariya.in",
    preload: "auto",
    skin: {
      controlbar: {
        background: "rgba(0,0,0,0)",
        icons: "rgba(255,255,255,0.8)",
        iconsActive: "#FFFFFF",
        text: "#FFFFFF",
      },
      menus: {
        background: "rgba(0,0,0,0.8)",
        text: "rgba(255,255,255,0.8)",
        textActive: "#FFFFFF",
      },
      timeslider: {
        progress: "#FF0000",
        rail: "rgba(255,255,255,0.3)",
      },
      tooltips: {
        background: "#FFFFFF",
        text: "#000000",
      },
    },
  };

  const playlistConfig = [
    {
      title: `${
        resData?.meta[0]?.title
          ? resData?.meta[0]?.title
          : preData?.channel_name
      }`,
      image: `${
        resData?.meta[0]?.boxCoverImage
          ? `https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto${resData?.meta[0]?.boxCoverImage}`
          : "/images/placeholder.png"
      }`,
      description: resData?.meta[0]?.description,
      file: `${preData?.channel_url}`,
      drm: {
        clearkey: { key: `${sk[1]}`, keyId: `${sk[0]}` },
        videoRobustness: "SW_SECURE_CRYPTO",
        audioRobustness: "SW_SECURE_CRYPTO",
      },

      logo: {
        file: `https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_150,w_150/${preData?.channel_logo}`,
        position: "top-right",
        hide: true,
      },
    },
  ];

  useEffect(() => {
    document.title = `${preData?.channel_name} - Vishal Padhariya`;
  }, []);

  return (
    <>
      <JWPlayer
        library={`/js/lib.js`}
        config={defaultConfig}
        playlist={playlistConfig}
      />
    </>
  );
};

export default TSWatchNow;
