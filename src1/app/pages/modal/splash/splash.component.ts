import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss'],
})
export class SplashComponent implements OnInit {

  constructor(public modalController: ModalController,public splashScreen: SplashScreen,private popover: PopoverController) { }

  ngOnInit() {
    this.splashScreen.hide();

    setTimeout(() => {
      //this.popover.dismiss();
      this.modalController.dismiss();
     
    }, 3000);
  }

}
