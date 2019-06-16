import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name ='';
  isHighlight = true;
  evenStyle = { color: 'red', fontSize: '40px' };
  oddSytle ={ color: 'black', fontSize: '10px' };
  currentClass = {circle : !this.isHighlight , square : this.isHighlight}
  constructor() { }

  ngOnInit() {
  }
  // showEvent(event){
  //   console.log(event);
  //   this.name = event.target.value;
  // }

}
