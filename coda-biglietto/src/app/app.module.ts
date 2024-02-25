//ANGULAR CORE
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


//COMPONENTI
import { AppComponent } from './app.component';
import { BigliettoComponent } from './biglietto/biglietto.component';

//ANGULAR MATERIAL
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [ BigliettoComponent,AppComponent],
  imports: [
    BrowserModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
