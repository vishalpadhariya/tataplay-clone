import TSWatchNow from "@/components/TSWatchNow";
import tsCatchupChannels from "@/utils/tsCatchupChannels.json";
import { decrypt } from "@/utils/secure";

const page = async ({ params }) => {
  const { id } = params;
  const currentData = await tsCatchupChannels.find(
    (item) => item.channel_id === decrypt(id)
  );
  const sk = currentData?.key?.length > 0 ? currentData?.key[0].split(":") : "";

  let config = {
    method: "GET",
    headers: {
      platform: "WEB",
    },
  };

  let epgData;

  const getEPGData = async () => {
    try {
      let response = await fetch(
        `https://tb.tapi.videoready.tv/content-detail/pub/api/v6/channels/${decrypt(
          id
        )}`,
        config
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      let { data } = await response.json();
      epgData = data;
    } catch (error) {
      console.error("Fetch error:", error.message);
    }
  };

  await getEPGData();

  return (
    <>
      <section id="live-streaming">
        <h1 className="font-black text-2xl m-4 hover:text-black transition delay-500 cursor-pointer">
          <span className="capitalize">{currentData?.channel_name}</span>
        </h1>
        <div className="channel-listing text-lg pt-24 mx-5">
          {currentData?.channel_url && (
            <TSWatchNow preData={currentData} sk={sk} resData={epgData} />
          )}
        </div>
      </section>
    </>
  );
};

export default page;
