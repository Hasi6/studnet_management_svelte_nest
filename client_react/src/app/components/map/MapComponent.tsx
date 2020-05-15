import React, { FC } from "react";
import GoogleMapReact from "google-map-react";
import { Room } from "@material-ui/icons";

const Marker: any = () => <Room color="secondary" />;

interface propTypes {
  lat: number;
  lng: number;
}

const MapComponent: FC<propTypes> = ({ lat, lng }): JSX.Element => {
  const center = {
    lat: lat,
    lng: lng
  };

  const zoom = 15;

  const apiKey = "AIzaSyBDTIkrq_EQJUC8o2tW1-ASi7LIN0nbaUA";

  return (
    <div
      style={{
        height: "60vh",
        width: "100%",
        margin: "auto",
        borderRadius: 20
      }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <Marker lat={lat} lng={lng} />
      </GoogleMapReact>
    </div>
  );
};

export default MapComponent;
