import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
import { AuthGuard } from './services/auth.guard';
import { CompComponent } from './insights/comp.component';
const routes: Routes = [
  { 
    path: "", redirectTo: '/home', pathMatch: 'full' 
  },
  {
    path: "home", component: HomeComponent,
  },
  
  {
    path: "about", component: AboutComponent,
  },
  {
    path: "contact", component: ContactComponent,
  },
  {
    path: "dashboard", component: DashboardComponent, canActivate: [AuthGuard],
  }, 
  {
    path: "insights", component: CompComponent,
  },
  {
    path: "**", component: ErrorComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
