import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { GraphComponent } from '../pages/graph/graph.component';
import { AuthService } from '../service/auth.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  slideOpts = {
    initialSlide: 1,
    speed: 30,
    effect:"fade",
    autoplay:true,
     };
     eng=true;
  constructor(private translate:TranslateService,private auth:AuthService,public modalController: ModalController) {
    this.translate.setDefaultLang('en');
    this.getGraphData()
  }
  myLanguageChange(val) {
    //console.log($event);
    if (val=='hindi') {
      this.translate.use("hindi");
       this.eng=false
       localStorage.setItem('language','hindi')
    } else {

      this.translate.use("en");
      this.eng=true
      localStorage.setItem('language','en')
    }


  }

  getGraphData(){
    this.auth.getdata(1).then(res=>{
      //alert(JSON.stringify(res))
      this.auth.graphData=res;
      //console.log(res)
    })
  }
  async showGraph(){
    const modal = await this.modalController.create({
      component: GraphComponent,
      showBackdrop:false,
     // cssClass:[{"width":"100vw"}]
    });
    return await modal.present();
  }
}
