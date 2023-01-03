import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from './models/products.model';
import { ProductModalService } from './services/product-modal.service';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {

  products$!: Observable<IProduct[]>

  constructor (private productsService: ProductsService,
    private productsModalService: ProductModalService
    ) {}
  
  ngOnInit(): void {
    this.products$ = this.productsService.getProducts$()
  }

  openModalProductForm(product?: IProduct): void {
    this.productsModalService.openModalProductForm(product)
  }

}
