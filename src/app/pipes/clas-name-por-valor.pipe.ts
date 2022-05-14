import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clasNamePorValor'
})
export class ClasNamePorValorPipe implements PipeTransform {

/**
 *
 * @param saldo Calcula se saldo é positivo ou negativo
 * @returns
 */
  public transform(saldo: number): ('negativo' | 'positivo' | 'zero') {
    if(Math.abs(saldo) < 0.01){
      return 'zero'
    }else if (saldo > 0){
      return 'positivo'
    }else{
      return 'negativo'
    }
  }

}
