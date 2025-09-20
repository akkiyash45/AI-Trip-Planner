"use client";

import React, { useEffect, useState } from "react";
import ChatBox from "./_compoents/ChatBox";
import Itinerary from "./_compoents/Itinerary";
import GlobalMap from "./_compoents/GlobalMap";
import { Button } from "@/components/ui/button";
import { useTripDetail } from "@/app/provider";

function Page() {
  const [activeIndex, setActiveIndex] = useState(1); // 0 = Itinerary, 1 = Map
  const tripContext = useTripDetail();

  if (!tripContext) throw new Error("useTripDetail must be used inside Provider");
  const { tripDetailInfo } = tripContext;

  // Automatically switch to itinerary when trip plan is generated
  useEffect(() => {
    if (tripDetailInfo) setActiveIndex(0);
  }, [tripDetailInfo]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 p-10 gap-5 relative min-h-screen">
      {/* Left: Chat */}
      <div className="min-h-[80vh]">
        <ChatBox />
      </div>

      {/* Right: Map / Itinerary */}
      <div className="col-span-2">
        {activeIndex === 0 ? <Itinerary /> : <GlobalMap />}
      </div>

      {/* Toggle Button */}
      <Button
        size="lg"
        onClick={() => setActiveIndex(activeIndex === 0 ? 1 : 0)}
        className="absolute bottom-20 left-[50%] -translate-x-1/2 shadow-lg rounded-full bg-black text-white"
      >
        {activeIndex === 0 ? "🌍" : "📋"}
      </Button>
    </div>
  );
}

export default Page;
