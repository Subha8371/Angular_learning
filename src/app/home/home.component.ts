import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  a:boolean=false;
  name:string="Subhas"
   
  onclick(){
    this.a=true
  }
  // nameChange(event:any){
  //   console.log(name)
  //    this.name=event.target.value
     
  // }

  xxx:string=''
  search(value:string){
    this.xxx=value;
    console.log(value)
  }
}
