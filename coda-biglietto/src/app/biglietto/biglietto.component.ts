import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-biglietto',
  templateUrl: './biglietto.component.html',
  styleUrls: ['./biglietto.component.css'],
})
export class BigliettoComponent implements OnInit {
  @Input() ordine: { numero: number; tempo: number } = { numero: 0, tempo: 0 };
  @Output() eliminaOrdine = new EventEmitter<number>();

  isReady: boolean = false;

  ngOnInit(): void {
    setTimeout(() => {
      console.log('Ordine ' + this.ordine.numero + ' Pronto');
      this.isReady = true;
    }, this.ordine.tempo * 1000);
  }

  deleteOrder() {
    this.eliminaOrdine.emit(this.ordine.numero);
  }
}
