import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
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
    console.log(this.categoriaSeleccionada);
    console.log(this.paiseSeleccionado);
  }
}
