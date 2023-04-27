import { Injectable } from "@angular/core";
import { TableService } from "./table/table.service";
import {
    HttpClient,
    //HttpErrorResponse,
    //HttpHeaders,
} from '@angular/common/http';
import { map, tap } from "rxjs";
@Injectable({
    providedIn: 'root',
})

export class DataStorageService {
    constructor(private http: HttpClient, private tableService: TableService,) { }

    /* fetchRows() {
        this.http.get<
                {
                    id: number;
                    szakdogaNev: string;
                    githublink: string;
                    oldallink: string
                    tagokneve: string
                }[]
            >(URL + '/szakdogak')
            .pipe(
                map((rows) => {
                    const rowData = rows.map((row) => {
                        const record = {
                            id: row.id,
                            cim: row.szakdogaNev,
                            keszitok: row.tagokneve,
                            github: row.githublink,
                            elerhetoseg: row.oldallink
                        };
                        return { ...record };
                    });
                    return rowData;
                }),
                tap({
                    next: (data) => this.tableService.setRows(data.slice()),
                    error: (error) => console.log(error),
                })
            )
            .subscribe();
    }  */

    fetchRows() {
        return this.http.get('https://localhost:7056/szakdogak')
    }
   

}

export const URL = 'https://localhost:7056';