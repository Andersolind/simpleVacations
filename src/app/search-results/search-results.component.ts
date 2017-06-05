import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

 @Input()data: any;
 public searchResults: any;
  constructor() { }

  ngOnInit() {
    
    this.searchResults = Object.keys(this.data.trips.tripOption);
   // console.log(this.data.trips);
  }

}
