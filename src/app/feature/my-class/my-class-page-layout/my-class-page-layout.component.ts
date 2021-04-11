import { Component, OnInit } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { Overview } from 'src/app/core/model/overview';
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
  chartGraphsData!: any;
  overviewRawData!: Overview[];

  constructor(private store: Store<AppState>, private plotGraphService: PlotGraphService,
              private actions$: Actions) { }

  ngOnInit(): void {
    this.store.pipe(
      select(selectAllOverview)
    ).subscribe(data => {
      this.overviewRawData = data;
      this.chartGraphsData = this.plotGraphService.plotChartData(this.overviewRawData, ['2015-03-24']);
    });

    this.actions$.pipe(
      ofType('[Error: Fetch Overview] Connection Error'),
    ).subscribe(() => this.networkError = true);
  }

  latestDropDownValue(value: string): void{
    this.chartGraphsData = this.plotGraphService.plotChartData(this.overviewRawData, [value]);
  }

}
