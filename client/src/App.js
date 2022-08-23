import "./App.css";
import "antd/dist/antd.css";
import { useMemo, useState, useEffect } from "react";
import { GoogleMap, MarkerF } from "@react-google-maps/api";
import PlacesAutocomplete from "./PlacesAutoComplete";

const dateFormat = "YYYY/MM/DD";
const timeFormat = "h:mm a";
const center = { lat: 44, lng: -80 };

const defaultMapOptions = {
  fullscreenControl: false,
  zoomControl: true,
  mapTypeControl: false,
  scaleControl: false,
  streetViewControl: false,
  rotateControl: false,
};

function App() {
  const [place, setPlace] = useState("");
  const [showDropdownState, setShowDropdownState] = useState(false);
  const [isUserTyping, setIsUserTypingState] = useState(true);
  const [coordinate, setCoordinate] = useState({ lat: 44, lng: -80 });

  useEffect(() => {
    if (isUserTyping === true) {
      setShowDropdownState(true);
    } else {
      setShowDropdownState(false);
      setIsUserTypingState(true);
    }
  }, [place]);

  return (
    <div>
      <div className="map">
        <GoogleMap
          zoom={10}
          center={coordinate}
          mapContainerClassName="map-container"
          options={defaultMapOptions}
        >
          <MarkerF position={coordinate} />
        </GoogleMap>
      </div>
      <div className="interactive">
        <div className="searchbox-and-suggestion">
          <PlacesAutocomplete setCoordinate={setCoordinate} />
        </div>
        {/* <div className="place-info"></div> */}
      </div>
    </div>
  );
}

export default App;
