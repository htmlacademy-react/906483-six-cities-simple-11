import cn from 'classnames';
import {useState, MouseEvent} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {setActiveSortValue} from '../../store/action';
import {SortOption} from '../../const';

function SortOptions(): JSX.Element {
  const dispatch = useAppDispatch();
  const activeSortValue = useAppSelector((state) => state.activeSortValue);
  const [isSortVisible, setSortVisible] = useState(false);

  const changeSortVisibleHandle = (evt: MouseEvent<HTMLSpanElement>) => {
    setSortVisible(!isSortVisible);
  };
  const optionClickHandle = (evt: MouseEvent) => {
    const target = evt.target as HTMLLIElement;
    dispatch(setActiveSortValue({sortValue: target.innerText}));
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={changeSortVisibleHandle}
      >
        {activeSortValue}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={cn(
        'places__options',
        'places__options--custom',
        {'places__options--opened': isSortVisible}
      )}
      onClick={optionClickHandle}
      >
        {Object.values(SortOption).map((item) => (
          <li
            className={cn(
              'places__option',
              {'places__option--active': item === activeSortValue}
            )}
            tabIndex={0}
            key={item}
          >{item}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default SortOptions;
