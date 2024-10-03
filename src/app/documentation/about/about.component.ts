import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  about:string="hii  my father is middle of me and my grndfather and my father has more priority than dadu to me ???"
   @Input()
  docs!: string;
  
  xyz:string=''
  a:string=''//case:-->data pass to sibling 
  oninputchange(value:string){
    this.xyz=value;
  }

}
