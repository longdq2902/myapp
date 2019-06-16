import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  @ViewChild(ChildComponent, { static: false })
  myChild: ChildComponent;

  constructor() { }

  ngOnInit() {
  }
  addToChild() {
    this.myChild.value = this.myChild.value + 1;
    console.log("-----------------");
    console.log(this.myChild.value);
  }


}
