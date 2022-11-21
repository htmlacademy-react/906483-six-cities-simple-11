import cn from 'classnames';

type LocationItemProps = {
  description: string;
  isActive: boolean;
}

function LocationItem({description, isActive}: LocationItemProps): JSX.Element {
  return (
    <li className="locations__item">
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
