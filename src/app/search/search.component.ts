import { Component, OnInit, ViewChild } from '@angular/core';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';
import { RequestContext, SearchSlice } from '../models/googleSearchModel';
import { FlightsService } from '../http/flights.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [FlightsService]
})
export class SearchComponent implements OnInit {

  public departureCode: string;
  public returnCode: string;
  public departureDate: any;
  public returnDate: any;
  public numberInfants: number;
  public numberChildren: number;
  public numberAdults: number;
  public showResults: boolean;
  options: DatePickerOptions;
  public googleKey = 'AIzaSyC1vgc1V5gqf9jx_2NmaNjtXPlB5XvKEhc';
  public url = 'https://www.googleapis.com/qpxExpress/v1/trips/search?key=';
  public errorMessage = [];
  public resultList: any;

  constructor(private flightService: FlightsService) {
    this.options = new DatePickerOptions();
  }

  ngOnInit() {
  }
  submit(form: any) {
    console.log(form);
    if (form.dirty) {
      this.formValidation();
    }
  }
  formValidation() {
    let payload: RequestContext;
    payload = {
      request: {
        passengers: {
          adultCount: this.numberAdults,
          childCount: this.numberChildren,
          infantInSeatCount: this.numberInfants
        },
        slice: []
      },
      solutions: 10
    };
    payload.request.slice.push(
      {
        origin: this.departureCode,
        destination: this.returnCode,
        date: this.departureDate.formatted
      } as SearchSlice);
    if (this.returnDate !== null) {
      payload.request.slice.push(
        {
          origin: this.departureCode,
          destination: this.returnCode,
          date: this.returnDate.formatted
        } as SearchSlice);
    }

    const serverApiCall = this.url + this.googleKey;

    this.flightService.searchFlights(serverApiCall, payload)
      .subscribe(
      result => this.resultList = result,
      error => this.errorMessage = <any>error
      );
      console.log(this.resultList);
  }
}
