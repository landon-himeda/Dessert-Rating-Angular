import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-display-all',
  templateUrl: './display-all.component.html',
  styleUrls: ['./display-all.component.css']
})
export class DisplayAllComponent implements OnInit {
  @Input() allCakes: any;
  @Output() selectCakeEvent = new EventEmitter();
  constructor(private _httpService: HttpService) {
  }

  ngOnInit() {
  }

  cakeClicked(cake) {
    this.selectCakeEvent.emit(cake);
  }
}