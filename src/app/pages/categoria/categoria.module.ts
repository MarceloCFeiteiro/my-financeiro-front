import { NgModule } from "@angular/core";
import { CategoriaComponent } from "./categoria.component";
import { CommonModule } from "@angular/common";
import { CategoriaRoutingModule } from "./categoria-routing.module";
import { NavbarModule } from "../../components/navbar/navbar.module";
import { SidebarModule } from "../../components/sidebar/sidebar.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgSelectModule } from "@ng-select/ng-select";



@NgModule(
  {
    providers:[],
    declarations: [CategoriaComponent],
    imports:[
      CommonModule,
      CategoriaRoutingModule,
      NavbarModule,
      SidebarModule,
      FormsModule,
      ReactiveFormsModule,
      NgSelectModule
    ]
  }
)

export class CategoriadModule{}
