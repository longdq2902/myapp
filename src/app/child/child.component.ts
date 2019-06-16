import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
//import { EventEmitter } from 'events';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Output() myClick = new EventEmitter<boolean>();
  @Output() removePerson = new EventEmitter<String>();
  constructor() { }

  ngOnInit() {
  }

  addToParent(){
    this.myClick.emit(true);
  }
  subFromParent(){
    this.myClick.emit(false);
  }
  deletePerson(name:string){
    this.removePerson.emit(name);
  }

}
