import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-brief',
  templateUrl: './brief.component.html',
  styleUrls: ['./brief.component.scss'],
})
export class BriefComponent implements OnInit {

  constructor(private translate:TranslateService) {
    let val= localStorage.getItem('language')
    if (val=='hindi') {
      this.translate.use("hindi");
       //localStorage.getItem('')
    } else {

      this.translate.use("en");
     
    }
   }
  fame1=false
  fame2=false
  details=false
  brief=true;
  sysArch=false

  ngOnInit() {
    this.show('1')
  }
   
  show(index){
  if(index==1){
    this.brief=true;
    this.details=false
    this.fame1=false
    this.sysArch=false
    this.fame2=false;
  }
  else if(index==2){
    this.brief=false;
    this.details=true
    this.fame1=false
    this.sysArch=false
      this.fame2=false
  }
  else if(index==3){
    this.brief=false;
    this.details=false
    this.fame1=true
    this.sysArch=false
      this.fame2=false
  }
  else if(index==4){
    this.brief=false;
    this.details=false
    this.fame1=false
    this.sysArch=true
      this.fame2=false
  }
  else{
    this.brief=false;
    this.details=false
    this.fame1=false
    this.sysArch=false
      this.fame2=true
  }
  }

}
