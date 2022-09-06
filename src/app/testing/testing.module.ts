import { NgModule } from "@angular/core";
import { TestingComponent } from './testing/testing.component';

@NgModule({
  declarations:[
    TestingComponent
  ],
  exports:[
    TestingComponent
  ]
})

export class testingModule{}
