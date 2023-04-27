import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Row } from '../interfaces';

@Injectable()
export class TableService {
    dataChanged = new Subject<Row[]>();

    private rows: Row[] = [];

    getRows() {
        return this.rows.slice()
    }

    setRows(row: Row[]) {
        this.rows = row;
        //console.log(this.lines);
        this.dataChanged.next(this.rows.slice());
      }

    newRow(newRow: Row) {
        console.log("newrow:");
        console.log(newRow);
        this.rows.push(newRow);
        this.dataChanged.next(this.rows.slice());
        console.log(this.rows);
    }

    editRow() {

    }

    deleteRow() {

    }

}
