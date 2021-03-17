import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Feature3Component } from "./feature-3.component";
import { Feature3RoutingModule } from "./feature3-routing";

@NgModule({
  imports: [CommonModule, Feature3RoutingModule],
  declarations: [Feature3Component],
  exports: [Feature3RoutingModule]
})
export class Feature3Module {}
