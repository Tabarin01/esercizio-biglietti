import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-biglietto',
  templateUrl: './biglietto.component.html',
  styleUrls: ['./biglietto.component.css'],
})
export class BigliettoComponent {
  @Input() numeroTicket: number = 0;
  @Input() ordine: { numero: number; tempo: number } = { numero: 0, tempo: 0 };
}


//BISOGNA FARE UN GRID PER NON FARE USCIRE I BIGLIETTI DAL TABELLONE
//BISOGNA INCREMENTARE IL NUMERO TICKET
//BISOGNA SETTARE IL TIMEOUT IN BASE AL TEMPO