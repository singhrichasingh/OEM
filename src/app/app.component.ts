import { Component } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { ModalController, Platform, PopoverController } from '@ionic/angular';
import { SplashComponent } from './pages/modal/splash/splash.component';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from './service/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  submenu;
  mainMenu=[]
  constructor(private auth:AuthService,private translate:TranslateService,private splashScreen: SplashScreen,public modalController: ModalController,private platform: Platform,private popover:PopoverController) {
    platform.ready().then(() => {

      //statusBar.styleDefault();
      this.moveToFirst();
    
      this.getMainMenu()
  });
  this.myLanguageChange() 
 
  }
  
  getMainMenu(){
    this.auth.getMainMenu().then(res=>{
      this.mainMenu=res
      console.log(this.mainMenu[0].UrlName)
    })
  }
  appPages=[
    {name:'Aboutfame2',url:'/brief',icon:'chevron-forward-outline'},
    {name:'policy',url:'/policy',icon:'chevron-forward-outline'},
    {name:'scheme',url:'/scheme',icon:'chevron-forward-outline'},
    {name:'pressrel',url:'/pressRel',icon:''},
    {name:'fame2Depo',url:'/fametwo',icon:''},
    {name:'impLink',url:'/implink',icon:''},
    {name:'contact',url:'/contactus',icon:''},
    {name:'connect',url:'/feedback',icon:'chevron-forward-outline'},
    {name:"faqs",url:'/faq',icon:'chevron-forward-outline'},
    {name:"privacyPolicy",url:'/tandc',icon:''},
    {name:'disclaimer',url:'/tandc',icon:''},
    {name:"tandc",url:'/tandc',icon:''},
    {name:'copyRight',url:'/tandc',icon:''}, 
    {name:'hyperlinkPolicy',url:'/tandc',icon:''},
    {name:'help',url:'/tandc',icon:''},
    {name:'siteMap',url:'/feed',icon:''},
    {name:'archive',url:'/archive',icon:''}
  ]
  async moveToFirst(){
    this.splashScreen.hide();
   // navigator.splashscreen.hide();
    const modal = await this.modalController.create({
     component: SplashComponent,
     showBackdrop:false,
    // cssClass:[{"width":"100vw"}] 
   });
  // const pop=await this.popover.create({
  //   component: SplashComponent
  // })
  return await modal.present();
   //return await pop.present();
  }

  // openNew(){
  //   alert("dghgukj")
  // }
  openSubmenu(index){
    if(index==0){
    this.submenu= [{name:'Brief',url:'/brief'},
    {name:'Who"s Who',url:'/brief'},
    {name:'FAME I',url:'/brief'},
    {name:'System Architecture',url:'/brief'},
    {name:'Timeline',url:'/brief'},]
    }
  }

  myLanguageChange() {
    this.translate.setDefaultLang('en');
    //console.log($event);
    let val= localStorage.getItem('language')
    if (val=='hindi') {
      this.translate.use("hindi");
       //localStorage.getItem('language')
    } else {

      this.translate.use("en");
     
    }


  }
}
