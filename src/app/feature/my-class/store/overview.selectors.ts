import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromOverview from './overview.reducer';

export const selectOverviewState = createFeatureSelector<fromOverview.OverviewState>('overview-raw-data');

export const selectAllOverview = createSelector(
    selectOverviewState,
    fromOverview.selectAll
);



