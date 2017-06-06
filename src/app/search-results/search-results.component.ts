import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit, OnChanges {

  @Input() data: any;
  public searchResults: any[];
  public noResults: boolean;
  constructor() { }

  ngOnInit() {
    if (this.searchResults === undefined) {
      this.searchResults = null;
    } else if (this.data.trips.tripOption === null) {
      this.noResults = true;
    } else {
      this.searchResults = this.data.trips.tripOption;
    }

    console.log('searchResults', this.searchResults);
  }

    ngOnChanges(changes: SimpleChanges) {

      if (changes) {
        const tempValue = changes['data'].currentValue;
        this.searchResults = tempValue.trips.tripOption;
        console.log(changes);
      }
  }

}
