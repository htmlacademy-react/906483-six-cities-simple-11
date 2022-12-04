import cn from 'classnames';
import {useAppDispatch} from "../../hooks";
import {MouseEvent} from "react";
import {activeCity} from "../../store/action";

type LocationItemProps = {
  description: string;
  isActive: boolean;
}

function LocationItem({description, isActive}: LocationItemProps): JSX.Element {
  const dispatch = useAppDispatch();
  const locationItemClickHandle = (evt: MouseEvent) => {
    const target = evt.target as HTMLLIElement;
    dispatch(activeCity({city: target.innerText}));
  };
  return (
    <li
      className="locations__item"
      onClick={locationItemClickHandle}
    >
      <a
        className={cn(
          'locations__item-link',
          'tabs__item',
          {'tabs__item--active': isActive}
        )}
      >
        <span>{description}</span>
      </a>
    </li>
  );
}

export default LocationItem;
