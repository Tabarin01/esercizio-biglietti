import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'coda-biglietto';

  ordini: { numero: number; tempo: number }[] = [];
  numeroTicket = 0;
  tempoTotale: number = 0;

  pezzi = [
    { nome: 'Hamburger', tempo: 5, quantita: 0 },
    { nome: 'Bibita', tempo: 1, quantita: 0 },
    { nome: 'Patatine', tempo: 2, quantita: 0 },
  ];

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

  sendOrder() {
    let totale = 0;
    for (let pezzo of this.pezzi) {
      totale += pezzo.quantita * pezzo.tempo;
    }
    this.tempoTotale = totale;
    this.numeroTicket++;
    if (totale != 0) {
      this.ordini.push({ numero: this.numeroTicket, tempo: this.tempoTotale });
    }
  }

  eliminaOrdine(index : number)
  {
    for (let i = 0; i < this.ordini.length; i++) {
      if(this.ordini[i].numero === index)
      {
        this.ordini.splice(i,1);
      }
      
    }
  }
}
//BISOGNA FARE UN GRID PER NON FARE USCIRE I BIGLIETTI DAL TABELLONE
//BISOGNA INCREMENTARE IL NUMERO TICKET
//BISOGNA SETTARE IL TIMEOUT IN BASE AL TEMPO
