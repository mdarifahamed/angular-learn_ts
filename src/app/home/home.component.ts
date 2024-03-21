import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  myValue: string = "X-yug";

  name:string = "Goldsikka"

  enabled: boolean = false;
  yourValue:string = "Information"


  manyclasses ={
    name1 : true,
    name2 : false,
    name3 : true,
  }

  style1 = "15px"

  bgstyle= {
    'background-color': 'blue', 'font-size': '14px',
    'border': '5px solid red '
  }

  show =false;


}
