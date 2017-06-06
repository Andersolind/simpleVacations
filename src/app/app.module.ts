import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DatePickerModule } from 'ng2-datepicker';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import {KeysPipe} from './pipes/KeysToObject';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SearchComponent,
    FooterComponent,
    SearchResultsComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DatePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
