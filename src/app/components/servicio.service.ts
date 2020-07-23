import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, from} from 'rxjs';
import {Producto} from './producto';

@Injectable()
export class ServicioService {


  constructor(private http:HttpClient) { }

  getProductos(){
    return this.http.get('http://localhost:8080/DistribuidoraJSF_war_exploded/rest/productos/list')
  }
}
