import LocationItem from '../location-item/location-item';

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
}

function LocationList({activeLocation}: LocationListProps): JSX.Element {
  return (
    <ul className="locations__list tabs__list">
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
