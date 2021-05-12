import { Component } from '@angular/core';
import { NoticiaService } from './services/noticia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _noticiaService : NoticiaService ){

  }
  buscarNoticias(parametros:any){
    this._noticiaService.getNoticias(parametros).subscribe(data =>{
      console.log(data);
    })
  }
}