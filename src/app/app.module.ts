// I, Luis Portilla added  FormsModule to test the capture of an input (Now it's under a comment)...

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { contadorModule } from './contador/contador.module';
import { testingModule } from './testing/testing.module';
import { PruebaModule } from './prueba/prueba.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    contadorModule,
    testingModule,
    PruebaModule
    //FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
