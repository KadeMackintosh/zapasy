import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './table/table.component';
import { TreeComponent } from './tree/tree.component';
import { TreeOfTablesComponent } from './tree-of-tables/tree-of-tables.component';
import { SeperateTablesComponent } from './seperate-tables/seperate-tables.component';





const routes: Routes = [{path:"", component: SeperateTablesComponent},{path:"tree", component: TreeComponent},{path:"table", component:TableComponent}, {path:"tree-of-tables", component: TreeOfTablesComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
