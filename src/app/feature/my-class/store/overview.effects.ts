import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';
import { ClassOverviewService } from 'src/app/core/services/class-overview/class-overview.service';
import { OverviewAction } from './overview.actiontype';

/* This class listens to the Fetch Overview Action & loads the data &
     dispatch the action to save the data to store*/
@Injectable()
export class OverviewEffects {

    loadOverview$ = createEffect(() => this.action$.pipe(
        ofType(OverviewAction.fetchOverview),
        concatMap(() => this.httpService.fetchResults()),
        map( overView => {
            return OverviewAction.overviewFetched({overView});
        }),
        catchError(err => of(OverviewAction.overviewError({error: ['Error occured', {error: err}]})))
    )
    );

    constructor(private action$: Actions, private httpService: ClassOverviewService){}
}
