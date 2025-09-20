import React, { useEffect, useRef } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";

function GlobalMap() {
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_API_KEY;

    const map = new mapboxgl.Map({
      container: mapContainer?.current as HTMLElement, // container reference
      style: "mapbox://styles/mapbox/streets-v12", // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 1.7, // starting zoom
      projection:'globe'
    });

    return () => map.remove();
  }, []);

  return (
    <div>
      <div
        ref={mapContainer}
        style={{
          width: "95%",
          height: "85vh",
          borderRadius: "12px",
        }}
      />
    </div>
  );
}

export default GlobalMap;
