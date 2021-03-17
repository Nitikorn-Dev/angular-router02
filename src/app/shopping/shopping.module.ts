import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ShoppingMainComponent } from "./shopping-main.component";
import { ShoppingRouterModule } from "./shopping-routing.module";
import { ProductComponent } from "./product/product.component";
import { ProductsDetailComponent } from "./productsdetail/productsdetail.component";
import { ProductsService } from './products.service';

@NgModule({
  imports: [CommonModule, ShoppingRouterModule],
  declarations: [
    ShoppingMainComponent,
    ProductComponent,
    ProductsDetailComponent
  ],
  providers: [ProductsService]
})
export class ShoppingModule {}
