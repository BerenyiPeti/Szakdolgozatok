import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TableService } from '../table/table.service';
import { Row } from '../interfaces';

@Component({
  selector: 'app-felvitel',
  templateUrl: './felvitel.component.html',
  styleUrls: ['./felvitel.component.css'],
  providers: [TableService],
})
export class FelvitelComponent implements OnInit, OnDestroy {

  constructor(private tableService: TableService) { }

  rows: Row[]

  cim: string = ''
  keszitok: string = ''
  elerhetoseg: string = ''
  github: string = ''

  ngOnInit(): void {

  }

  ngOnDestroy(): void {

  }
  onSubmit(form: NgForm) {
    console.log(form.value);
    this.tableService.newRow({ 
      cim: form.value.cimInput, 
      keszitok: form.value.keszitokInput, 
      github: form.value.githubInput, 
      elerhetoseg: form.value.elerhetosegInput})
    //this.tableService.newRow(form.value)
  }
}
