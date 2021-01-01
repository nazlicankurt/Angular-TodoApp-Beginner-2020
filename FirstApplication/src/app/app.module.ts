import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatListModule,
    FormsModule
    

  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
