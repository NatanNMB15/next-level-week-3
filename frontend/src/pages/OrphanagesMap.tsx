import React from "react";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";

import "leaflet/dist/leaflet.css";

import mapMarkerImg from "../assets/images/map-marker.svg";

import "../styles/pages/orphanages-map.css";

function OrphanagesMap() {
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
      <iframe
        title="Google Maps"
        frameBorder="0"
        className="embed-responsive-item"
        src={`https://www.google.com/maps/embed/v1/view?zoom=${13}&center=${-25.4319707},${-49.28586}&key=${
          process.env.REACT_APP_MAPS_API_KEY
        }`}
        allowFullScreen
        style={{ width: "100%" }}
      ></iframe>{" "}
      <Link to="/" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;
