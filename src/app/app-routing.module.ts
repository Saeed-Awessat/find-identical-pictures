import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { GameStatusComponent } from './game-status/game-status.component';
import { StatusDetailsComponent } from './status-details/status-details.component';
import { MatrixComponent } from './matrix/matrix.component';
//import { CandyDetailsComponent } from './candy-details/candy-detailss.component';



// Routes - Component אלו הנתיבים הדרושים באתר. כל נתיב יפעיל
const appRoutes: Routes = [
    { path: "home", component: MatrixComponent },
    { path: "gameStatus", component: GameStatusComponent },
    { path: "gameStatus/:id", component: StatusDetailsComponent },
    { path: "", redirectTo: "/home", pathMatch: "full" }
    ];



@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ]
})
export class AppRoutingModule { }
