import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Overview } from 'src/app/core/model/overview';
import { OverviewAction } from './overview.actiontype';

export const OverviewFeatureKey = 'overview-raw-data';

export interface OverviewState extends EntityState<Overview> {
  allOverviewDataLoaded: boolean;
}

export const adapter = createEntityAdapter<Overview>({selectId: Overview => Overview.SubmittedAnswerId});

export const initialOverviewState = adapter.getInitialState({
  allOverviewDataLoaded: false
});

export const OverviewReducer = createReducer(
    initialOverviewState,
    on(OverviewAction.overviewFetched, (state, action) => adapter.setAll(action.overView,
      {...state, allOverviewDataLoaded: true}))
  );

export const { selectAll } = adapter.getSelectors();
