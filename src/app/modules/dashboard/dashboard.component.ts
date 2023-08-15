import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
 import { DecimalPipe } from '@angular/common';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Air India', weight: 1.0079, symbol: 'AI' },
  { position: 2, name: 'Indigo', weight: 4.0026, symbol: 'IG' },
  { position: 3, name: 'Vistara Airlines', weight: 6.941, symbol: 'VSA' },
  { position: 4, name: 'Akasa Air', weight: 9.0122, symbol: 'AK' },
  { position: 5, name: 'Go First Airways', weight: 10.811, symbol: 'GFA' },
  { position: 6, name: 'Spicejet', weight: 12.0107, symbol: 'SPJ' },
  { position: 7, name: 'Indigo', weight: 14.0067, symbol: 'IG' },
  { position: 8, name: 'Air India', weight: 15.9994, symbol: 'AI' },
  { position: 9, name: 'Spicejet', weight: 18.9984, symbol: 'SPJ' },
  { position: 10, name: 'Indigo', weight: 20.1797, symbol: 'IG' },
  { position: 11, name: 'Air Asia India', weight: 22.9897, symbol: 'AAI' },
  { position: 12, name: 'Vistara Airlines', weight: 24.305, symbol: 'VSA' },
  { position: 13, name: 'Indigo', weight: 26.9815, symbol: 'IG' },
  { position: 14, name: 'Air India', weight: 28.0855, symbol: 'AI' },
  { position: 15, name: 'Star Air', weight: 30.9738, symbol: 'SA' },
  { position: 16, name: 'Spicejet', weight: 32.065, symbol: 'SPJ' },
  { position: 17, name: 'Go First Airways', weight: 35.453, symbol: 'GFA' },
  { position: 18, name: 'Akasa Air', weight: 39.948, symbol: 'AK' },
  { position: 19, name: 'Air India', weight: 39.0983, symbol: 'AI' },
  { position: 20, name: 'Indigo', weight: 40.078, symbol: 'IG' },
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  bigChart: { name: string; data: number[]; }[] = [];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(private dashboardService: DashboardService) {
   
     }

  ngOnInit() {
    this.bigChart = this.dashboardService.bigChart();
    this.dataSource.paginator = this.paginator;
  }
}
