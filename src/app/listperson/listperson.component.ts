import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listperson',
  templateUrl: './listperson.component.html',
  styleUrls: ['./listperson.component.css']
})
export class ListpersonComponent implements OnInit {

  arrPerson = [
    {name:"Tí", age: 3},
    {name:"Tèo", age: 4},
    {name:"Bông", age: 5}
  ];

  constructor() { }

  ngOnInit() {
  }
  
  removePersonByName(name: String){
    console.log(name);
    const index = this.arrPerson.findIndex(e => e.name === name);
    console.log(index);
    this.arrPerson.splice(index,1);
  }

}
