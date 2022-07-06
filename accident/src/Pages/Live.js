import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
const containerStyle = {
  width: "70%",
  height: "100%",
};
const center = {
  lat: 30.695202,
  lng: 76.854172,
};
function Live() {
  const [location, setlocation] = useState([]);
  const fetchLocation = () => {
    axios
      .get("https://gpsvehicleuiet.loca.lt/getLastLocation?number=9019000074")
      .then((response) => {
        setlocation(response.data);
      });
  };
  useEffect(() => {
    let interval = setInterval(() => {
      fetchLocation();
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });
  const markcenter = {
    lat: parseFloat(location[0]),
    lng: parseFloat(location[1]),
  };

  const [map, setMap] = useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      zoom={16}
      center={markcenter}
      options={{
        streetViewControl: false,
      }}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Marker
        position={markcenter}
        icon={
          "http://maps.google.com/mapfiles/kml/shapes/placemark_circle_highlight.png"
        }
        onRightClick={() =>
          alert(
            `Car is located at a latitute of ${parseFloat(
              location[0]
            )} and longitude of ${parseFloat(location[1])}`
          )
        }
      />
    </GoogleMap>
  ) : (
    <></>
  );
}

export default Live;
