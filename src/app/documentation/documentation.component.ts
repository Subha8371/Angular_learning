import { Component } from '@angular/core';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css']
})
export class DocumentationComponent {
  about:string="Parent to child data pass using @Input() custom property binding"

  xyz:string=''
  oninputchange(value:string){
    this.xyz=value;
  }
}
