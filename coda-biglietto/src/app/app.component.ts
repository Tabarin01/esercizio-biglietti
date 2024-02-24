import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'coda-biglietto';

  pezzi = [
    { nome: 'Hamburger', tempo: 20, quantita: 0 },
    { nome: 'Bibita', tempo: 1, quantita: 0 },
    { nome: 'Patatine', tempo: 10, quantita: 0 },
  ];

  totale: any = [{}];

  add(i: number) {
    for (let index = 0; index < this.pezzi.length; index++) {
      if (index == i) {
        this.pezzi[index].quantita++;
      }
    }
  }

  sub(i: number) {
    for (let index = 0; index < this.pezzi.length; index++) {
      if (index == i) {
        if (this.pezzi[index].quantita > 0) {
          this.pezzi[index].quantita--;
        } else {
          alert('Non puoi andare sotto 0');
        }
      }
    }
  }
}
