import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTabsModule} from '@angular/material/tabs';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BranchComponent } from './components/branch/branch.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatGridListModule} from "@angular/material/grid-list";
import { TreeElemComponent } from './components/tree-elem/tree-elem.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {MatInputModule} from "@angular/material/input";
import {MatTreeModule} from "@angular/material/tree";
import {MatTableModule} from "@angular/material/table";
import {MatToolbarModule} from "@angular/material/toolbar";
import {FormsModule} from "@angular/forms";
import {MatRadioModule} from "@angular/material/radio";
import {NgbModal, NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {MatButtonToggleModule} from "@angular/material/button-toggle";



@NgModule({
  declarations: [
    AppComponent,
    BranchComponent,
    TreeElemComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatExpansionModule,
    MatInputModule,
    MatTreeModule,
    MatTableModule,
    MatToolbarModule,
    FormsModule,
    MatRadioModule,
    NgbModule,
    MatButtonToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
