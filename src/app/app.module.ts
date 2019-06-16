import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { UserComponent } from './user/user.component';
import {FormsModule} from '@angular/forms';
import { StructComponent } from './struct/struct.component';
import { WordsComponent } from './words/words.component';
import { PersonComponent } from './person/person.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ListpersonComponent } from './listperson/listperson.component'

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    UserComponent,
    StructComponent,
    WordsComponent,
    PersonComponent,
    ParentComponent,
    ChildComponent,
    ListpersonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
