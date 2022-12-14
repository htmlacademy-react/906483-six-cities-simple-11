import {useRef, useEffect} from 'react';
import {Icon, Marker} from 'leaflet';
import leaflet from 'leaflet';
import useMap from '../../hooks/use-map';
import {Offers, Offer} from '../../types/offer';
import {City} from '../../types/city';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  city: City;
  offers: Offers;
  selectedPoint: Offer | null;
  cssClass: string;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map(props: MapProps): JSX.Element {
  const {city, offers, selectedPoint, cssClass} = props;
  const mapRef = useRef(null);
  const markerRef = useRef<Marker[]>([]);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markers = leaflet.layerGroup().addTo(map);
      map.setView([city.location.latitude, city.location.longitude],
        city.location.zoom
      );
      markerRef.current.forEach((marker) => marker.remove());
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });
        marker.setIcon(defaultCustomIcon).addTo(markers);
        markerRef.current.push(marker);
      });
      if (selectedPoint) {
        const currentOffer = new Marker({
          lat: selectedPoint.location.latitude,
          lng: selectedPoint.location.longitude,
        });
        currentOffer.setIcon(currentCustomIcon).addTo(markers);
      }
      return () => {
        markers.clearLayers();
      };
    }
  }, [map, offers, selectedPoint]);

  return (
    <section
      className={`${cssClass} map`}
      ref={mapRef}
    >
    </section>
  );
}

export default Map;
