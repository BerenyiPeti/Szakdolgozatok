import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { FelvitelComponent } from './felvitel/felvitel.component';
import { FormsModule } from '@angular/forms';
import { TableService } from './table/table.service';
import { FelvitelService } from './felvitel/felvitel.service';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    FelvitelComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TableService, FelvitelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
