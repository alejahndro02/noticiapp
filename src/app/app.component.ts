import { Component } from '@angular/core';
import { NoticiaService } from './services/noticia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listaNoticias: any[]= [];
  constructor(private _noticiaService : NoticiaService ){

  }
  buscarNoticias(parametros:any){
    this._noticiaService.getNoticias(parametros).subscribe(data =>{
      this.listaNoticias = data.articles;
    },error =>{
      console.log(error);
    })
  }
}