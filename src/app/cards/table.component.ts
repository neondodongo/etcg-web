import { Component } from '@angular/core';
import { ApiService } from '../api.service'
import { Card } from '../card';

@Component({
  selector: 'card-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  title = 'ETCG Cards';
  cards: Card[];
  displayCards: any[] = [];

  constructor(private apiService: ApiService){}

  ngOnInit(){
    this.apiService.getCards().subscribe((res)=>{
        this.cards = res;
        this.getDisplayCards();
        console.log(this.displayCards);
    });
  }

  private getDisplayCards() {
    var count = 0;
    var subArr = [];
    for (var i=0; i<this.cards.length; i++) {
      count++;
      subArr.push(this.cards[i]);
      if (count % 3 == 0) {
        this.displayCards.push(subArr);
        subArr = [];
        continue;
      }
    }
  }
}