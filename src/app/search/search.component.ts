import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from "@angular/forms";
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchField: FormControl;
  @Output() onSearchPatternReady: EventEmitter<string>;
  constructor() {
    this.onSearchPatternReady = new EventEmitter();
  }

  ngOnInit() {
    this.searchField = new FormControl();
    this.searchField.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .subscribe(pattern => {
        this.onSearchPatternReady.emit(pattern);
    });
  }

  onResetSearchBtnClick() {
    this.searchField.setValue('');
    this.onSearchPatternReady.emit('');
  }
}
