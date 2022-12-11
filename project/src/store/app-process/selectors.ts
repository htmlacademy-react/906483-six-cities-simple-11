import {NameSpace} from '../../const';
import {State} from '../../types/state';

export const getActiveCity = (state: State): string => state[NameSpace.App].activeCity;
export const getActiveSortValue = (state: State): string => state[NameSpace.App].activeSortValue;
