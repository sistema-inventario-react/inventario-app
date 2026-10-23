import { Component, inject } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto-service';

@Component({
  imports: [],
  selector: 'app-producto-lista',
  templateUrl: './producto-lista.html',
})

export class ProductoLista {
  productos!: Producto[];

  private productoService = inject(ProductoService);

  ng
}