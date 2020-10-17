import React from "react";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { Map, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";

import mapMarkerImg from "../assets/images/map-marker.svg";

import "../styles/pages/orphanages-map.css";

function OrphanagesMap() {
  const position = {
    lat: -25.4313241,
    lng: -49.3030403,
    zoom: 12.5,
  };

  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Marker" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Curitiba</strong>
          <span>Paraná</span>
        </footer>
      </aside>
      <Map
        center={[position.lat, position.lng]}
        zoom={position.zoom}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </Map>
      <Link to="/" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;
