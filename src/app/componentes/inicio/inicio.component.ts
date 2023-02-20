import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  // Variables inicio presentación
  public nombreAutor: string;
  public rolAutor: string;
  public presentacionAutor: string;

  constructor() { 
    this.nombreAutor = 'Gary Sandoval Melillanca';
    this.rolAutor    = 'Web Developer'
    this.presentacionAutor = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Ratione ab fugiat explicabo rerum, nulla amet sint nihil quod ad, cupiditate voluptas
    eum pariatur modi, repellat dolorum. Quos deserunt, quasi fuga veniam corrupti nobis
    iusto libero incidunt quas illo. Cumque est debitis deserunt illum fuga ullam, suscipit, 
    sit at dolorem aperiam, delectus sequi quo explicabo! Fugit reiciendis saepe ducimus. 
    Tempore distinctio numquam alias voluptatum enim, provident cum officia placeat nemo 
    necessitatibus pariatur assumenda, quam fugiat veritatis deleniti ratione earum. Quas
    placeat ex odit natus officiis maxime reprehenderit debitis! Repellendus voluptatibus nemo 
    animi quas soluta accusantium sint maiores eius? Aliquid, animi ut.`
  }

  ngOnInit(): void {
  }

}
