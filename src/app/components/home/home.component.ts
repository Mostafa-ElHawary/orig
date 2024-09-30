import { Component, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  @Input() title!:number;

  constructor() {
    console.log('home constructor');
  }

  ngOnChanges( changes:SimpleChange  ): void {
  console.log('home ngOnChanges');
  
  }
}
