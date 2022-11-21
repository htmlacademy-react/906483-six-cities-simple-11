import {createAction} from '@reduxjs/toolkit';

export const activeCity = createAction<{city: string}>('locationList/activeCity');
