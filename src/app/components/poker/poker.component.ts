import { Component, OnInit } from '@angular/core';
import { JogoPoker } from 'src/app/models/jogo_poker';

@Component({
  selector: 'app-jogo-poker',
  templateUrl: './poker.component.html',
  styleUrls: ['./poker.component.css']
})
export class PokerComponent implements OnInit {
  public jogoPoker: JogoPoker = new JogoPoker("A", "♥");
  public corStyle: string = 'color_black'

  ngOnInit(): void {
  }

  public alteraBaralho(carta: string){
    this.jogoPoker.carta = carta;
  }

  public alteraNipe(nipe: string){
    this.jogoPoker.nipe = nipe;
  }

  public mudaCor(cor: string){
    if (cor == 'red'){
      this.corStyle = 'color_red'
    } else{
      this.corStyle = 'color_black'
    }
  }

}
