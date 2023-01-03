import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IProduct } from '../../models/products.model';
import { ProductModalService } from '../../services/product-modal.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-delete-modal',
  templateUrl: './product-delete-modal.component.html',
  styleUrls: ['./product-delete-modal.component.scss']
})
export class ProductDeleteModalComponent implements OnInit {
  product?: IProduct;

  constructor(
    private ngbActiveModal: NgbActiveModal,
    private productsService: ProductsService
    ){}

  ngOnInit(): void {
    
  }


  onCancel(): void {
    this.ngbActiveModal.close()
  }
}
