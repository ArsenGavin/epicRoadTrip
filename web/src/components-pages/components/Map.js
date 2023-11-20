import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { GOOGLE_MAP_KEY } from "../../utils/constants";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  DirectionsRenderer
} from "react-google-maps";
import Loading from "../misc/Loading";
import Error from "../misc/Error";
import { useHistory } from "react-router-dom";

export default function Map() {
  const history = useHistory();
  const gmaps = window.google.maps;
  const { loading, error, departure, steps } = useSelector(state => state.roadtrip);
  const [directions, setDirections] = useState("");
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);
  const [waypoints, setWaypoints] = useState(null);

  useEffect(() => {
    if (steps.length === 0) {
      history.push("/");
    }
    setOrigin(steps[0].coordinates);
    setDestination(steps[steps.length - 1].coordinates);
    setWaypoints(steps.map(s => ({
      location: { lat: s.coordinates.latitude, lng: s.coordinates.longitude },
      stopover: true
    })));
    if (steps.map(s => s.coordinates.latitude !== undefined)) {
      setTimeout(() => drawItinerary(), 100);
    }
  }, [steps, steps.length]);

  useEffect(() => {}, []);

  const MyMapComponent = withScriptjs(
    withGoogleMap((props) => (
      <GoogleMap defaultZoom={8} defaultCenter={{
        lat: props.departure.coordinates.latitude,
        lng: props.departure.coordinates.longitude
      }}>
        {directions && <DirectionsRenderer directions={directions}/>}
      </GoogleMap>
    ))
  );

  const drawItinerary = () => {
    const DirectionsService = new gmaps.DirectionsService();
    DirectionsService.route({
      origin: {
        lat: origin ? origin.latitude : steps[0].coordinates.latitude,
        lng: origin ? origin.longitude : steps[0].coordinates.longitude
      },
      destination: {
        lat: destination ? destination.latitude : steps[steps.length - 1].coordinates.latitude,
        lng: destination ? destination.longitude : steps[steps.length - 1].coordinates.longitude
      },
      travelMode: gmaps.TravelMode.DRIVING,
      waypoints: waypoints ? waypoints : steps.map(s => ({
        location: { lat: s.coordinates.latitude, lng: s.coordinates.longitude },
        stopover: true
      }))
    }, (result, status) => {
      if (status === gmaps.DirectionsStatus.OK) {
        setDirections(result);
      }
    });
  };

  if (loading) return <Loading/>;
  if (error) return <Error/>;

  return (
    <MyMapComponent
      isMarkerShown
      googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_KEY}&v=3.exp&libraries=geometry,drawing,places`}
      loadingElement={<div style={{ height: "100%" }}/>}
      containerElement={<div style={{ height: "100%" }}/>}
      mapElement={<div style={{ height: "100%" }}/>}
      departure={departure}
      steps={steps}
    />
  );
}
