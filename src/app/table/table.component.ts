import { Component, OnDestroy, OnInit } from '@angular/core';
import { TableService } from './table.service';
import { Row } from '../interfaces';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnDestroy {

  constructor(private tableService: TableService) { }

  adatok: Row[]

  getSub: Subscription;

  ngOnInit(): void {
    console.log(this.adatok);

    this.adatok = this.tableService.getRows()
    //console.log(this.adatok);

    this.getSub = this.tableService.dataChanged.subscribe((data: Row[]) => {
      console.log('LÁTOM');
      console.log(data);
      
      this.adatok = data.slice();
    })
  }

  ngOnDestroy(): void {
    this.getSub.unsubscribe()
  }

}
