import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HTTP } from '@ionic-native/http/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { SplashComponent } from './pages/modal/splash/splash.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { LoginComponent } from './pages/login/login.component';
import { BriefComponent } from './pages/brief/brief.component';
import { FaqComponent } from './pages/faq/faq.component';
import { FeedbackAndSuggestionComponent } from './pages/feedback-and-suggestion/feedback-and-suggestion.component';
import { PolicyComponent } from './pages/policy/policy.component';
import { PressrelComponent } from './pages/pressrel/pressrel.component';
import { Fame2Component } from './pages/fame2/fame2.component';
import { ImpLinkComponent } from './pages/imp-link/imp-link.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { SchemeComponent } from './pages/scheme/scheme.component';
import { HelpPolicyComponent } from './pages/help-policy/help-policy.component';
import { ArchiveComponent } from './pages/archive/archive.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthService } from './service/auth.service';
import { GraphComponent } from './pages/graph/graph.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { DealersDashboardComponent } from './pages/dealers-dashboard/dealers-dashboard.component';
import { DealerBuyerComponent } from './pages/dealer-buyer/dealer-buyer.component';
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
//import { HttpModule, Http } from '@angular/http';
//import { SplashScreen } from '@ionic-native/splash-screen';
@NgModule({
  declarations: [AppComponent,
    SplashComponent,
    FeedbackComponent,
    LoginComponent,
    BriefComponent,
    FaqComponent,
    FeedbackAndSuggestionComponent,
    PolicyComponent,
    PressrelComponent,
    Fame2Component,
    ImpLinkComponent,
    ContactusComponent,
    SchemeComponent,
    HelpPolicyComponent,
    ArchiveComponent,
  GraphComponent,
  DealersDashboardComponent,
  DealerBuyerComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,IvyCarouselModule,NgApexchartsModule,HttpClientModule,TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [HttpClient]
    }
  })],
  providers: [
    SplashScreen,
    AuthService,
    HTTP,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})

export class AppModule {}
