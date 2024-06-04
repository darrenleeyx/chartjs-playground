import { Routes } from '@angular/router';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/bar-chart',
        pathMatch: 'full'
    },
    {
        path: 'bar-chart', 
        component: BarChartComponent,
        title: 'Bar Chart'
    },
    {
        path: 'line-chart', 
        component: LineChartComponent,
        title: 'Line Chart'
    },
];
