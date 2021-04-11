import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Overview } from 'src/app/core/model/overview';
import { PlotGraphService } from 'src/app/core/services/plotgraph/plot-graph.service';
import { AppState } from 'src/app/store/reducer';
import { selectAllOverview } from '../../my-class/store/overview.selectors';

@Component({
  selector: 'app-performance-page-layout',
  templateUrl: './performance-page-layout.component.html',
  styleUrls: ['./performance-page-layout.component.scss']
})
export class PerformancePageLayoutComponent implements OnInit {

  chartGraphsData!: any;
  overviewRawData!: Overview[];

  constructor(private store: Store<AppState>,
              private plotGraphService: PlotGraphService) { }

  ngOnInit(): void {
    this.store.pipe(
      select(selectAllOverview)
    ).subscribe(data => {
      this.overviewRawData = data;
      this.chartGraphsData = this.plotGraphService.plotChartData(this.overviewRawData, ['2015-03-24']);
    });
  }

  latestDropDownValue(value: string): void{
    this.chartGraphsData = this.plotGraphService.plotChartData(this.overviewRawData, [value]);
  }

}
