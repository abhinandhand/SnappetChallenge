import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { finalize, first, tap } from 'rxjs/operators';
import { AppState } from 'src/app/store/reducer';
import { OverviewAction } from './overview.actiontype';

@Injectable()
export class OverviewResolver implements Resolve<any>{

    /* Inorder to avoid multiple dispatch */
    loading = false;

    constructor(private store: Store<AppState>){}

    resolve(): Observable<any> {
        /*Class Overview raw Data is loaded during the router resolving state, which is well before the rendering of the 
        My Class Page component. And the resloved data is saved in the store */
        return this.store.pipe(
            tap(() => {
                if (!this.loading){
                    this.loading = true;
                    this.store.dispatch(OverviewAction.fetchOverview());
                }
            }),
        /* waits for the above observable to emit one value & to make sure the observable completion & successful route transition, */
        first(),
        /* to reset the flag in case of successful or failed operation */
        finalize(() => this.loading = false)
        );
    }
}
