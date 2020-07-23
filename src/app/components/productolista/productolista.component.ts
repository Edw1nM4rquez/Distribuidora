import { Component, OnInit } from '@angular/core';
import {Producto} from '../producto';
import {ServicioService} from '../servicio.service';
import {Observable, from} from 'rxjs';

@Component({
  selector: 'app-productolista',
  templateUrl: './productolista.component.html',
  styleUrls: ['./productolista.component.css']
})
export class ProductolistaComponent implements OnInit {

  public productos: any = [];

  constructor(public dataService: ServicioService) { }

  ngOnInit(){
    this.dataService.getProductos().subscribe((response: any)=>{
      this.productos = response;
      console.log(response);
    },(error)=>{
      console.log(error);
    })


  }

  

}
