import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductDeleteModalComponent } from '../components/product-delete-modal/product-delete-modal.component';
import { ProductFormModalComponent } from '../components/product-form-modal/product-form-modal.component';
import { IProduct } from '../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class ProductModalService {

  constructor(private ngbModal: NgbModal) { }

  openModalProductForm(product?: IProduct): void {
    const modalRef = this.ngbModal.open(ProductFormModalComponent, {
      centered: true,
      size: "md",
    });
    modalRef.componentInstance.product = product;
  }

}
