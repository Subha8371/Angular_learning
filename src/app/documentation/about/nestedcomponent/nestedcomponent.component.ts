import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-nestedcomponent',
  templateUrl: './nestedcomponent.component.html',
  styleUrls: ['./nestedcomponent.component.css']
})
export class NestedcomponentComponent {
  @Input()
  docs!:string

  @Output()
  inputchange:EventEmitter<string>=new EventEmitter();
  
  xyz:string=''

  onchangesub(){
    // console.log("lllllllll",this.xyz)
    this.inputchange.emit(this.xyz)
  }
}
