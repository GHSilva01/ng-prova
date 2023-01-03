import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { IProduct } from "../models/products.model";
import { PRODUCTS } from "./products.mock";

@Injectable({
  providedIn: "any",
})
export class ProductsService {
  private products$ = new BehaviorSubject<IProduct[]>(PRODUCTS); 

  constructor() {}

  getProducts$(): Observable<IProduct[]> {
    return this.products$.asObservable();
  }

  addProduct(product: IProduct): void {
    const products = this.getProducts();
    products.push(product);
    this.products$.next(products); 
  }


  updateProduct(product: IProduct): void {
    const products = this.getProducts();
    const index = products.findIndex((p) => product.id == p.id);
    products[index] = product;
    this.products$.next(products);
  }

  getProducts(): IProduct[] {
    return this.products$.getValue();
  }
}
