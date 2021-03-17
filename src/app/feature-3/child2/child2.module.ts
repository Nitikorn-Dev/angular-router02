import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RouterModule } from "@angular/router";
import { Child2Component } from "./child2.component";
import { routesChild2 } from "./child2-routing";

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routesChild2)],
  declarations: [Child2Component],
  exports: []
})
export class Child2Module {}
