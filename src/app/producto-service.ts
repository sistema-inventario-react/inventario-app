import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from './producto';


@Service()
export class ProductoService {

    private urlBase = "http://localhost:8080/inventario-app/productos";
    private clienteHttp = inject(HttpClient);
    
    obtenerProductosList(): Observable<Producto[]>{
        return this.clienteHttp.get<Producto[]>(this.urlBase);
    }

}
