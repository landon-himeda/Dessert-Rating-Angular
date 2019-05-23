import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAllCakes() {
    return this._http.get("/cakes");
  }

  getOneCake(cakeId: number) {
    console.log("accessed getOneCake")
    return this._http.get(`/cakes/${cakeId}`);
  }

  postNewCake(newCake) {
    return this._http.post("/cakes", newCake);
  }

  updateCake(cakeToUpdate) {
    return this._http.put(`/cakes/${cakeToUpdate._id}`, cakeToUpdate);
  }

  deleteCake(cakeToDelete) {
    return this._http.delete(`/cakes/${cakeToDelete._id}`);
  }

  postNewRating(cakeId: number, newRating) {
    return this._http.post(`/cakes/${cakeId}/ratings`, newRating);
  }
}
