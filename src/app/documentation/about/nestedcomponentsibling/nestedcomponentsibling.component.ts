import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nestedcomponentsibling',
  templateUrl: './nestedcomponentsibling.component.html',
  styleUrls: ['./nestedcomponentsibling.component.css']
})
export class NestedcomponentsiblingComponent {

  @Input()
  a!: string;  //case-->    
}
