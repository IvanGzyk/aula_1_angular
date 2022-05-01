import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'web';

  /**
   * Retorna `'Bom dia'` se for antes de meio dia.
   */
  public geraCumprimento(): string {
    const dataHoraAtual = new Date();
    if(dataHoraAtual.getHours() < 12){
      return 'Bom Dia!'
    } else {
      return 'Boa Tarde!';
    }
  }
}
