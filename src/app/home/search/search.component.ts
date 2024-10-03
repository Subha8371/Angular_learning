import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  xxx:string='aaa'

  @Output()
  inputchange:EventEmitter<string>=new EventEmitter<string>
  searchText: string='';

  onSubmit(inputEl:HTMLInputElement){
    this.searchText=inputEl.value;
    this.inputchange.emit(this.searchText)
  }
}
