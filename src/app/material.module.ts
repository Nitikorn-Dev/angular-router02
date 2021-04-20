import { NgModule } from "@angular/core";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";

const modules = [
  MatSidenavModule,
  MatButtonModule,
  MatListModule,
  MatIconModule,
  MatToolbarModule
];

@NgModule({
  imports: [modules],
  exports: [modules]
})
export class MaterialModule {}
