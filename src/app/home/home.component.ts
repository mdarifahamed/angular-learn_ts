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
  show = true;
  color = 'green';
  color2 = 'purple';

  users = ['perry','arif', 'rohit', 'arman']
  userDeatails=[
    {name:'perry', age:23, address:'Aus'},
    {name:'arif',  age:21, address:'Hyd'},
    {name:'rohit', age:26, address:'Pune'},
    {name:'arman', age:15, address:'Begu'},


  ]

  useremp =[
    {name:'sohan', phone:'889900',socialacc:['fb','insta','linkedIn']},
    {name:'alish', phone:'889910', socialacc:['Insta','youtube','linkedIn']},
    {name:'rajesh', phone:'909400', socialacc:['fb','email','insta']},
    {name:'aoora', phone:'889930', socialacc:['snapchat','insta','linkedIn']},
  ]
}
