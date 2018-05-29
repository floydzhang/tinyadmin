import { Component, OnInit } from '@angular/core';

const single = [
  {
    'name': 'Germany',
    'value': 8940000
  },
  {
    'name': 'USA',
    'value': 5000000
  },
  {
    'name': 'France',
    'value': 7200000
  },
  {
    'name': 'Germany1',
    'value': 8940000
  },
  {
    'name': 'USA1',
    'value': 5000000
  },
  {
    'name': 'France1',
    'value': 7200000
  }
];

@Component({
  selector: 'app-info-cards',
  templateUrl: './info-cards.component.html',
  styleUrls: ['./info-cards.component.scss']
})



export class InfoCardsComponent implements OnInit {

  single: any[];
  multi: any[];

  view: any[] = [224, 100];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {
    Object.assign(this, { single });
  }

  onSelect(event) {
    console.log(event);
  }

  ngOnInit() {
  }

}
