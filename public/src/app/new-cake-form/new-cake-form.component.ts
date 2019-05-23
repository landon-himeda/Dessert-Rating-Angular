import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-new-cake-form',
  templateUrl: './new-cake-form.component.html',
  styleUrls: ['./new-cake-form.component.css']
})
export class NewCakeFormComponent implements OnInit {
  @Output() refreshCakesEvent2 = new EventEmitter();
  newCake: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.newCake = {
      "name": "",
      "baker": "",
      "img_url": "",
      "description": ""
    }
  }

  createCakeThroughService() {
    let observable = this._httpService.postNewCake(this.newCake);
    observable.subscribe( (data) => {
      console.log(data);
      this.newCake = {
        "name": "",
        "baker": "",
        "img_url": "",
        "description": ""
      }
      this.refreshCakesEvent2.emit(true);
    })
  }

}
