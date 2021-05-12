import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @Output () parametrosSeleccionados = new EventEmitter<any>();
  categoriaSeleccionada = "general";
  paiseSeleccionado = "mx";
  categorias : any[]= [
    {value: 'general', nombre:'General'},
    {value: 'bussiness', nombre:'Negoios'},
    {value: 'sports', nombre:'Deportes'},
    {value: 'entretainment', nombre:'Entretenimiento'},
    {value: 'healt', nombre:'Salud'},
    {value: 'technology', nombre:'Tecnología'},
  ];
  paises: any[]=[
    {value: 'mx', nombre:'Mexico'},
    {value: 'br', nombre:'Brasil'},
    {value: 'ar', nombre:'Argentina'},
    {value: 'fr', nombre:'Francia'},
    {value: 'hu', nombre:'Hungria'},
    {value: 'gb', nombre:'Reino Unido'},
  ]

  constructor() { }

  ngOnInit(): void {
  }
  buscarNoticia(){
    const PARAMETROS = {
      categoria: this.categoriaSeleccionada,
      pais: this.paiseSeleccionado
    }
    this.parametrosSeleccionados.emit(PARAMETROS);
  }
}
