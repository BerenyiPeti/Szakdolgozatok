import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TableService } from '../table/table.service';
import { Row } from '../interfaces';
import { Subscription } from 'rxjs';
import { FelvitelService } from './felvitel.service';

@Component({
  selector: 'app-felvitel',
  templateUrl: './felvitel.component.html',
  styleUrls: ['./felvitel.component.css'],
  providers: [TableService],
})
export class FelvitelComponent implements OnInit, OnDestroy {

  constructor(private tableService: TableService, private fvService: FelvitelService) { }

  selectedRow: Row

  cim: string = ''
  keszitok: string = ''
  elerhetoseg: string = ''
  github: string = ''
  sub: Subscription;
  modositas: boolean = false

  ngOnInit(): void {
    this.sub = this.sub = this.fvService.editStarted.subscribe((data: Row) => {
      this.selectedRow = data;
      this.cim = data.cim
      this.keszitok=data.keszitok
      this.elerhetoseg = data.elerhetoseg
      this.github = data.github
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

  onSubmit(form: NgForm) {
    /* console.log(form.value);
    this.tableService.newRow({
      id: 
      cim: form.value.cimInput,
      keszitok: form.value.keszitokInput,
      github: form.value.githubInput,
      elerhetoseg: form.value.elerhetosegInput
    }) */
    //this.tableService.newRow(form.value)
  }


}
