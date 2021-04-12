import { ChartDataSets, ChartType } from 'chart.js';
import { Color } from 'chartjs-plugin-datalabels/types/options';
import { Label } from 'ng2-charts';

export interface BarChartModel {
    barChartLabels: Label[];
    barChartType: ChartType;
    barChartLegend: boolean;
    barChartData: any[];
    barChartOptions?: any[];
    barChartColors: any[];
}
