import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor() {
    console.log('constructor');

  }

  ngOnInit(): void {
    console.log('ngOnInit');

  }

  heroes: string[] = ['Spiderman','Iroman','Hulk','Captain America']
  bye: string = ''

  borrarHeroe() {
    this.bye =  this.heroes.pop() || 'RIP heroes'
    console.log('Deleting... ' + this.bye)
  }

}
