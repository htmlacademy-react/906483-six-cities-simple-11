import LocationItem from '../location-item/location-item';
import {useAppSelector} from '../../hooks';

const locations = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

function LocationList(): JSX.Element {
  const activeLocation = useAppSelector((state) => state.activeCity);
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
