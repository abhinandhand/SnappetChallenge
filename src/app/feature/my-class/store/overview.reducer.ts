import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Overview } from 'src/app/core/model/overview';
import { OverviewAction } from './overview.actiontype';

export const OverviewFeatureKey = 'overview-raw-data';
export interface OverviewState extends EntityState<Overview> {}
export const adapter = createEntityAdapter<Overview>({selectId: Overview => Overview.SubmittedAnswerId});
export const initialOverviewState = adapter.getInitialState();

export const OverviewReducer = createReducer(
    initialOverviewState,
    on(OverviewAction.overviewFetched, (state, action) => adapter.setAll(action.overView, state))
  );

export const { selectAll } = adapter.getSelectors();
