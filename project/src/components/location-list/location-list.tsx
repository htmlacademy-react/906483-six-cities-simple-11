import LocationItem from '../location-item/location-item';
import {useAppSelector} from '../../hooks';
import {getActiveCity} from '../../store/app-process/selectors';

const locations = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

function LocationList(): JSX.Element {
  const activeLocation = useAppSelector(getActiveCity);
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
