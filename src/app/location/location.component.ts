import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoinService } from '../coin.service';

@Component({
  selector: 'ninja-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  @Input() name;
  constructor(private route: ActivatedRoute, private coinService:CoinService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (!this.name){
        this.name = params['name']; 
      }
   });
  }

  addCoins(num){
    this.coinService.coins += num;
  }

}
