import {
    ActionReducerMap,
    MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';

// Global application state defination
export interface AppState {

}

export const reducers: ActionReducerMap<AppState> = {

};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
