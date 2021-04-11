import { Injectable } from '@angular/core';
import * as Chart from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { BarChartModel } from '../../model/barchart';
import { Overview } from '../../model/overview';
import { PieChartModel } from '../../model/piechart';

@Injectable({
  providedIn: 'root'
})
export class PlotGraphService {
  topPerformers: any = {};
  diffiCultExcerciseRaw: any = {};
  sortedTopDifficultExc: any = { exc: [], values: [] };
  colors: any = [{
    backgroundColor:
      ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)', 'orange', 'yellow']
  }];
  constructor() { }

  plotChartData(rawData: Overview[], dateFilter: string[]): any {
    const topSubjects: any = {};
    const topDomain: any = {};
    const topObjective: any = {};
    rawData.forEach((data: Overview) => {
      if (data.SubmitDateTime.split('T')[0] === dateFilter[0]) {
        this.topPerformersOfDay(data);
        this.getDifficultExcercise(data);
        topSubjects[data.Subject] = topSubjects[data.Subject] ? topSubjects[data.Subject] + 1 : 1;
        topDomain[data.Domain] = topDomain[data.Domain] ? topDomain[data.Domain] + 1 : 1;
        topObjective[data.LearningObjective] = topObjective[data.LearningObjective] ? topObjective[data.LearningObjective] + 1 : 1;
      }
    });
    this.getsortMostDifficultExcercise();
    const subjectPieChart = this.createPieChartModel(topSubjects);
    const domainPieChart = this.createPieChartModel(topDomain);
    const objectivePieChart = this.createPieChartModel(topObjective);
    const excercisePieChart = this.createExcPieChartModel();
    return { objective: objectivePieChart,
      subject: subjectPieChart,
      domain: domainPieChart,
      performers: this.createBarChartModel(),
      exc: excercisePieChart};
  }

  createBarChartModel(): BarChartModel {
    return {
      barChartType: 'bar',
      barChartLabels: Object.keys(this.topPerformers),
      barChartLegend: true,
      barChartData: Object.values(this.topPerformers)
    };
  }

  createPieChartModel(object: any): PieChartModel {
    return {
      pieChartType: 'pie',
      pieChartData: Object.values(object).slice(0, 5),
      pieChartLabels: Object.keys(object).slice(0, 5),
      pieChartLegend: true,
      pieChartColors: this.colors,
      pieChartPlugins: pluginDataLabels,
      pieChartOptions: this.getPieChartOptions()
    };
  }

  createExcPieChartModel(): PieChartModel {
    return {
      pieChartType: 'pie',
      pieChartData: this.sortedTopDifficultExc.values.slice(0, 7),
      pieChartLabels: this.sortedTopDifficultExc.exc.slice(0, 7),
      pieChartLegend: true,
      pieChartColors: this.colors,
      pieChartPlugins: pluginDataLabels,
      pieChartOptions: this.getPieChartOptions()
    };
  }

  getPieChartOptions(): any {
    const pieChartOptions: Chart.ChartOptions = {
      responsive: true,
      legend: {
        position: 'top',
      },
      plugins: {
        datalabels: {
          formatter: (value, ctx: any) => {
            const label = ctx.chart.data.labels[ctx.dataIndex];
            return label;
          },
        },
      }
    };
    return pieChartOptions;
  }

  topPerformersOfDay(data: Overview): void {
    if (data.Correct) {
      this.topPerformers[data.UserId] = this.topPerformers[data.UserId] ?
        this.topPerformers[data.UserId] + data.Correct : data.Correct;
    }
  }

  getDifficultExcercise(data: Overview): void {
    if (data.Progress < 0) {
      this.diffiCultExcerciseRaw[data.ExerciseId] = this.diffiCultExcerciseRaw[data.ExerciseId] ?
        this.diffiCultExcerciseRaw[data.ExerciseId] + 1 : 1;
    }
  }

  getsortMostDifficultExcercise(): void {
    Object.entries(this.diffiCultExcerciseRaw).sort((a: any, b: any) => b[1] - a[1]).forEach(
      item => {
        this.sortedTopDifficultExc.exc.push(item[0]);
        this.sortedTopDifficultExc.values .push(item[1]);
      }
    );

  }
}

