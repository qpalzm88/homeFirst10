import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { New1Component } from './new1/new1.component';
import { New2Component } from './new2/new2.component';
import { New3Component } from './new3/new3.component';
import { New4Component } from './new4/new4.component';
import { New5Component } from './new5/new5.component';
import { New6Component } from './new6/new6.component';
import { New7Component } from './new7/new7.component';
import { New8Component } from './new8/new8.component';
import { New9Component } from './new9/new9.component';
import { New0Component } from './new0/new0.component';

@NgModule({
  declarations: [
    AppComponent,
    New1Component,
    New2Component,
    New3Component,
    New4Component,
    New5Component,
    New6Component,
    New7Component,
    New8Component,
    New9Component,
    New0Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
