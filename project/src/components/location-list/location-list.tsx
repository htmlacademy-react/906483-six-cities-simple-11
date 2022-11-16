import LocationItem from '../location-item/location-item';
import {useState} from 'react';

const locations = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

const activeLocationDefault = {
  value: locations[0],
};

function LocationList(): JSX.Element {
  const [activeLocation] = useState(activeLocationDefault);
  return (
    <ul
      className="locations__list tabs__list"
    >
      {locations.map((item) => (
        <LocationItem
          key={item}
          value={item}
          isActive={item === activeLocation.value}
        />
      )
      )}
    </ul>
  );
}

export default LocationList;
