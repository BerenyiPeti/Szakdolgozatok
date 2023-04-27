import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Row } from '../interfaces';

@Injectable()
export class FelvitelService {
    editStarted = new Subject<Row>();

    editRow(row: Row) {
        this.editStarted.next(row);
    }

}
