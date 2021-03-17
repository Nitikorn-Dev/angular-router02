import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { Feature3Component } from "./feature-3.component";
import { AppCustomPreloader } from "../app-routing.loader";

const routes: Routes = [
  {
    path: "feature-3",
    component: Feature3Component,
    children: [
      {
        path: "child1",
        loadChildren: () =>
          import("./child1/child1.module").then(m => m.Child1Module),
        data: { preload: true }
      },
      {
        path: "child2",
        loadChildren: () =>
          import("./child2/child2.module").then(m => m.Child2Module),
        data: { preload: true }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class Feature3RoutingModule {}
