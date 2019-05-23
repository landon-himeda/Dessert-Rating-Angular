import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-display-cake',
  templateUrl: './display-cake.component.html',
  styleUrls: ['./display-cake.component.css']
})
export class DisplayCakeComponent implements OnInit {
  @Input() cakeToView: any;
  @Output() refreshCakesEvent = new EventEmitter();
  newRating = {"comment": "", "score": undefined};
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
  }

  deleteCakeThroughService(cake) {
    // console.log(cake);
    let observable = this._httpService.deleteCake(cake);
    observable.subscribe( (data) => {
      // console.log(data);
      this.refreshCakesEvent.emit(true);
      this.cakeToView = {
        "img_url": "",
        "baker": "",
        "name": "",
        "description": "",
      };
    })
  }

  createRatingThroughService(cake) {
    let observable = this._httpService.postNewRating(cake._id, this.newRating);
    observable.subscribe( (data) => {
      this.refreshCakesEvent.emit(true);
      this.newRating = {"comment": "", "score": undefined};
      let getObservable = this._httpService.getOneCake(cake._id);
      getObservable.subscribe( (data2) => {
        this.cakeToView = data2["data"];
      })
    })
  }

}
