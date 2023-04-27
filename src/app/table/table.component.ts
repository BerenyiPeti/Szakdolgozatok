import { Component, OnDestroy, OnInit } from '@angular/core';
import { TableService } from './table.service';
import { Row } from '../interfaces';
import { Subscription } from 'rxjs';
import { FelvitelService } from '../felvitel/felvitel.service';
import { NgForm } from '@angular/forms';
import { DataStorageService } from '../data-storage.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnDestroy {

  constructor(private tableService: TableService, 
    private fvSerivce: FelvitelService, 
    private dsService: DataStorageService, 
    /* private http: */ ) { }

  adatok: Row[]

  getSub: Subscription;

  ngOnInit(): void {
    this.dsService.fetchRows().subscribe((data)=>{
      console.log(data);
      
    })

    this.adatok = this.tableService.getRows()
    console.log(this.adatok);

    this.getSub = this.tableService.dataChanged.subscribe((data: Row[]) => {
      console.log('LÁTOM');
      console.log(data);
      
      this.adatok = data.slice();
    })
  }

  ngOnDestroy(): void {
    this.getSub.unsubscribe()
  }

  onModositas(sor: Row) {
    this.fvSerivce.editRow(sor);
  }

  onTorles(sor: Row) {

  }

}
