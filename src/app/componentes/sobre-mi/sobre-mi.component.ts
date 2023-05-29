import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {

  //Variables Sobre mi
  public estudios: object = {};
  public expLaboral: object = {};
  public cursos: object = {};
  public sobreMi: string;
  
  constructor() {
    this.sobreMi = 'Soy Drogadicto :)';
    this.expLaboral = {
      bancoBice:{
        empresa: "Banco Bice",
        cargo: "Soporte Técnico",
        annioInicio: 2019, 
        mesInicio: "Enero",
        annioTermino: 2019,
        mesTermino: "Abril",
        descripcion: "Entregar soporte tecnico de manera presencial o remota a los usuarios"
      },
      bancoBice2:{

      },
      desis:{}
    }
  }

  ngOnInit(): void {
  }

}
