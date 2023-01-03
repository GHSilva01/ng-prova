import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { IProduct } from "../../models/products.model";
import { ProductsService } from "../../services/products.service";

@Component({
  selector: "app-product-form-modal",
  templateUrl: "./product-form-modal.component.html",
  styleUrls: ["./product-form-modal.component.scss"],
})
export class ProductFormModalComponent implements OnInit {
  product?: IProduct;
  productForm!: FormGroup;
  isEditedMode!: boolean

  constructor(
    private ngbActiveModal: NgbActiveModal,
    private fb: FormBuilder,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.productForm = this.fb.group({
      id: this.fb.control(this.product?.id),
      name: this.fb.control(this.product?.name || '', [Validators.required]),
      description: this.fb.control(this.product?.description || '', [
        Validators.required,
      ]),
      price: this.fb.control(this.product?.price || '', [Validators.required]),
      date: this.fb.control(this.product?.date || '', [Validators.required]),
      tags: this.fb.control(this.product?.tags || []),
      imgs: this.fb.control(this.product?.imgs || []) 
    });
    this.isEditedMode = !!this.product
  }

  onSubmit(): void {
    this.productForm.markAllAsTouched()

    if(this.productForm.invalid){
      return 
    }
    const product = this.productForm.getRawValue()
    if(this.isEditedMode){
      this.productsService.updateProduct(product)
    }else {
      this.productsService.addProduct(product)
    }
    this.ngbActiveModal.close()
  }

  onCancel(): void {
    this.ngbActiveModal.close()
  }
}
