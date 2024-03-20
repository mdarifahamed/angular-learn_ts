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


}
