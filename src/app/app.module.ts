import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsultaSaldoComponent } from './components/consulta-saldo/consulta-saldo.component';
import localPt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { ClasNamePorValorPipe } from './pipes/clas-name-por-valor.pipe';
import { PokerComponent } from './components/poker/poker.component';

registerLocaleData(localPt, 'pt-BR');
@NgModule({
  declarations: [
    AppComponent,
    ConsultaSaldoComponent,
    PokerComponent,
    ClasNamePorValorPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'pt-BR'
    },
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {
}
