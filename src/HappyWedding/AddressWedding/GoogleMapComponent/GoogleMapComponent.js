import { GoogleMap, useLoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "400px",
  height: "200px",
  margin: "20px 0",
  borderRadius: "5px",
};

const center = {
  lat: 10.7769,
  lng: 106.7009,
};

const GoogleMapComponent = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15} />
  );
};

export default GoogleMapComponent;
