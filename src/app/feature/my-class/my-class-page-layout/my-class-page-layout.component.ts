import { Component, OnInit } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { GraphData } from 'src/app/core/model/graphdata';
import { PlotGraphService } from 'src/app/core/services/plotgraph/plot-graph.service';
import { AppState } from 'src/app/store/reducer';
import { selectAllOverview } from '../store/overview.selectors';

@Component({
  selector: 'app-my-class-page-layout',
  templateUrl: './my-class-page-layout.component.html',
  styleUrls: ['./my-class-page-layout.component.scss']
})
export class MyClassPageLayoutComponent implements OnInit {
  networkError = false;
  chartGraphsData$: Observable<GraphData>;
  overviewRawData!: any;

  constructor(private store: Store<AppState>, private plotGraphService: PlotGraphService,
              private actions$: Actions) { }

  ngOnInit(): void {
    this.chartGraphsData$ = this.plotGraphService.graphData$;
    this.store.pipe(
      select(selectAllOverview),
      filter(data => Object.keys(data).length > 0),
      tap(data => this.overviewRawData = data),
      map(data => this.plotGraphService.plotChartData(data, ['2015-03-24']))
    ).subscribe();

    this.actions$.pipe(
      ofType('[Error: Fetch Overview] Connection Error'),
    ).subscribe(() => this.networkError = true);
  }

  latestDropDownValue(value: string): void{
    this.plotGraphService.plotChartData(this.overviewRawData, [value]);
  }

}
