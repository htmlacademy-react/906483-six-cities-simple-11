import LocationItem from '../location-item/location-item';
import React from 'react';

const locations = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

type LocationListProps = {
  activeLocation: string;
  locationListClickHandle: (evt: React.MouseEvent<HTMLUListElement>) => void;
}

function LocationList({activeLocation, locationListClickHandle}: LocationListProps): JSX.Element {
  return (
    <ul
      className="locations__list tabs__list"
      onClick={locationListClickHandle}
    >
      {locations.map((item) => (
        <LocationItem
          key={item}
          description={item}
          isActive={item === activeLocation}
        />
      )
      )}
    </ul>
  );
}

export default LocationList;
