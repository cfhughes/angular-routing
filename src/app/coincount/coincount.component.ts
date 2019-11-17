import { Component, OnInit } from '@angular/core';
import { CoinService } from '../coin.service';

@Component({
  selector: 'app-coincount',
  templateUrl: './coincount.component.html',
  styleUrls: ['./coincount.component.css']
})
export class CoincountComponent implements OnInit {
  coins=-1
  constructor(private coinService:CoinService) {
    this.coins = coinService.coins
   }

  ngOnInit() {
  }

}
