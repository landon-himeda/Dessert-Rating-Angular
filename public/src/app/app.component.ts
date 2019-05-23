import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  appAllCakes: any;
  appCakeToView: any;

  constructor(private _httpService: HttpService) { 
    this.getAllCakesThroughService();
  }

  ngOnInit() {
  }

  getAllCakesThroughService() {
    let observable = this._httpService.getAllCakes();
    observable.subscribe( (data) => {
      console.log(data);
      this.appAllCakes = data["data"];
    });
  }

  appSelectCake(emittedData) {
    console.log(emittedData);
    this.appCakeToView = emittedData;
  }
}