import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductResolveService } from "./product-resolve.service";
import { ProductComponent } from "./product/product.component";
import { ProductsDetailComponent } from "./productsdetail/productsdetail.component";
import { ShoppingMainComponent } from "./shopping-main.component";

const routesShopping: Routes = [
  {
    path: "",
    component: ShoppingMainComponent,
    children: [
      {
        path: "",
        component: ProductComponent,
        children: [
          {
            path: ":id",
            component: ProductsDetailComponent,
            resolve: ProductResolveService
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routesShopping)],
  exports: [RouterModule]
})
export class ShoppingRouterModule {}
