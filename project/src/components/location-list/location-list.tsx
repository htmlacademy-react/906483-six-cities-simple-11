import LocationItem from '../location-item/location-item';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {activeCity} from "../../store/action";
import React, {EventHandler, MouseEventHandler, SyntheticEvent} from "react";

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
  const dispatch = useAppDispatch();
  const listClickHandle = (evt: React.MouseEvent<HTMLUListElement>) => {
    const target = evt.target as HTMLLIElement
    dispatch(activeCity({city: target.innerText}))
  }
  return (
    <ul
      className="locations__list tabs__list"
      onClick={listClickHandle}
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
