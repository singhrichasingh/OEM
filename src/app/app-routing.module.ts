import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ArchiveComponent } from './pages/archive/archive.component';
import { BriefComponent } from './pages/brief/brief.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { DealerBuyerComponent } from './pages/dealer-buyer/dealer-buyer.component';
import { DealersDashboardComponent } from './pages/dealers-dashboard/dealers-dashboard.component';
import { Fame2Component } from './pages/fame2/fame2.component';
import { FaqComponent } from './pages/faq/faq.component';
import { FeedbackAndSuggestionComponent } from './pages/feedback-and-suggestion/feedback-and-suggestion.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { HelpPolicyComponent } from './pages/help-policy/help-policy.component';
import { ImpLinkComponent } from './pages/imp-link/imp-link.component';
import { LoginComponent } from './pages/login/login.component';
import { PolicyComponent } from './pages/policy/policy.component';
import { PressrelComponent } from './pages/pressrel/pressrel.component';
import { SchemeComponent } from './pages/scheme/scheme.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {path: '',redirectTo: 'home', pathMatch: 'full' },
  {path:'feed',component:FeedbackComponent},
  {path:'login',component:LoginComponent},
  {path:'brief',component:BriefComponent},
  {path:'faq',component:FaqComponent},
  {path:'policy',component:PolicyComponent},
  {path:'fametwo',component:Fame2Component},
  {path:'pressRel',component:PressrelComponent},
  {path:'implink',component:ImpLinkComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'feedback',component:FeedbackAndSuggestionComponent},
  {path:'scheme',component:SchemeComponent},
  {path:'tandc',component:HelpPolicyComponent},
  {path:'archive',component:ArchiveComponent},
  {path:'dealerDashboard',component:DealersDashboardComponent},
  {path:'dealerbuyer',component: DealerBuyerComponent},
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
