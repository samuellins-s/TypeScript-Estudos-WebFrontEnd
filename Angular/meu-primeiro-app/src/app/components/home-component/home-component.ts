import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-home-component',
  styleUrl: './home-component.css',
  templateUrl: './home-component.html',
})
export class HomeComponent {
  name = 'Jorginho';
  deveMostrarTitulo = false;

  listItems = ['sabuga o LIKE', 'cana de acucar', 'jorginhotrumpet']

  submit(event: any){
    console.log(event);
  }
}
