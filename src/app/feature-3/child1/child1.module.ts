import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RouterModule } from "@angular/router";
import { Child1Component } from "./child1.component";
import { routesChild1 } from "./child1.routing";

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routesChild1)],
  declarations: [Child1Component]
})
export class Child1Module {}
