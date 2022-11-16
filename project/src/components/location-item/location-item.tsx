import cn from 'classnames';

type LocationItemProps = {
  value: string;
  isActive: boolean;
}

function LocationItem({value, isActive}: LocationItemProps): JSX.Element {
  return (
    <li className="locations__item">
      <a
        className={cn(
          'locations__item-link',
          'tabs__item',
          {'tabs__item--active': isActive}
        )}
      >
        <span>{value}</span>
      </a>
    </li>
  );
}

export default LocationItem;
