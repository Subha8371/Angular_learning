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

  onSubmit(){
    this.inputchange.emit(this.xxx)
  }
}
