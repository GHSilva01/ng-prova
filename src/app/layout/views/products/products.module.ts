import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { NgbDropdownModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductsService } from './services/products.service';
import { ProductFormModalComponent } from './components/product-form-modal/product-form-modal.component';
import { ProductDeleteModalComponent } from './components/product-delete-modal/product-delete-modal.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductFormModalComponent,
    ProductDeleteModalComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    NgbModalModule,
    ReactiveFormsModule,
    NgbDropdownModule,
  ],
  providers: [
    ProductsService
  ]
})
export class ProductsModule { }
