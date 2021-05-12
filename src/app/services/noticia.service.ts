import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {
  headUrl = 'https://newsapi.org/v2/top-headlines?country='
  apiKeyNewsApi = 'c469042076824bc2a9676aaca02b4f10';
  constructor(private http: HttpClient) { 
  }

  getNoticias(parametros: any):Observable<any>{
    const URL = this.headUrl+parametros.pais+'&category='+parametros.categoria +
                '&apiKey='+this.apiKeyNewsApi;
    return this.http.get(URL);
  }
}
