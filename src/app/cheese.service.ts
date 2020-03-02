import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CheeseService {

  API_KEY = '42e1defcd7msh454930a498d1507p1bb3cejsna7d0574f1576';

  constructor(private http: HttpClient) { }

  getCheese(){
    this.http.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.API_KEY}`);
  }
}
