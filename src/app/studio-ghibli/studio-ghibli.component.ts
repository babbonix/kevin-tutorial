import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-studio-ghibli',
  standalone: true,
  imports: [],
  templateUrl: './studio-ghibli.component.html',
  styleUrl: './studio-ghibli.component.css'
})
export class StudioGhibliComponent {

  data: any;

  constructor(
    private http: HttpClient
  ){}

  getData(){
    this.http.get('https://ghibliapi.vercel.app/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49').subscribe({
      next: (res) => {
        console.log(res);
        this.data = JSON.stringify(res);
      },
      error: (e) => {
        console.error(e);
      }
    })

  }

}
