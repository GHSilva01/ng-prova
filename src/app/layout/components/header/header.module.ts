import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HeaderComponent } from "./header.component";
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [CommonModule,
     RouterModule,
     MatToolbarModule
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class HeaderModule {}
