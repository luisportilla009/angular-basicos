import { Component } from "@angular/core";

@Component({
  selector: 'testing-app',
  templateUrl: 'testing.component.html'
})

export class TestingComponent {
  name: string = 'TEST0'
  lastName: string = 'test1'
  age: number = 44

  getNameLowerCased(): string {
    return this.name.toLowerCase()
  }

  get lastNameUppercased(){
    return this.lastName.toUpperCase()
  }

  cambiarEdad(): void{
    console.log('test');
    this.age = 4
  }

}
