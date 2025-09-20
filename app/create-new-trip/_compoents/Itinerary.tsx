"use client";

import React from "react";
import { useTripDetail } from "@/app/provider";
import DayCard from "./DayCard";
import HotelCard from "./HotelCard";
import { Timeline } from "@/components/ui/timeline";

export default function Itinerary() {
  const tripContext = useTripDetail();
  if (!tripContext) throw new Error("useTripDetail must be inside Provider");
  const { tripDetailInfo } = tripContext;

  if (tripDetailInfo === "loading") return <p>Loading trip plan...</p>;
  if (!tripDetailInfo) return <p>No trip plan yet</p>;

  const data = [
    { title: "Recommended Hotels", content: <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{tripDetailInfo.hotels.map((h, i) => <HotelCard key={i} hotel={h} />)}</div> },
    ...(tripDetailInfo.itinerary || []).map((day) => ({
      title: `Day ${day.day}`,
      content: <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{day.activities.map((act, idx) => <DayCard key={idx} activity={act} />)}</div>
    })),
  ];

  return <Timeline data={data} tripData={tripDetailInfo} />;
}
