import {MouseEvent} from 'react';
import LocationItem from '../location-item/location-item';
import {activeCity} from '../../store/action';
import {useAppDispatch} from '../../hooks';

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
  const dispatch = useAppDispatch();
  const locationListClickHandle = (evt: MouseEvent<HTMLUListElement>) => {
    const target = evt.target as HTMLLIElement;
    dispatch(activeCity({city: target.innerText}));
  };
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
