import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help-policy',
  templateUrl: './help-policy.component.html',
  styleUrls: ['./help-policy.component.scss'],
})
export class HelpPolicyComponent implements OnInit {

  constructor() { }
 privacy=true
 disc=false;
 termsc=false;
 copy=false;
 link=false;
 help=false;
  ngOnInit() {}
  

  show(index){
    if(index==1){
      this.privacy=true
      this.disc=false;
      this.termsc=false;
      this.copy=false;
      this.link=false;
      this.help=false;
    }
  else if(index==2){
      this.privacy=false
      this.disc=true;
      this.termsc=false;
      this.copy=false;
      this.link=false;
      this.help=false;
    }
  else if(index==3){
      this.privacy=false
      this.disc=false;
      this.termsc=true;
      this.copy=false;
      this.link=false;
      this.help=false;
    }
  else if(index==4){
      this.privacy=false
      this.disc=false;
      this.termsc=false;
      this.copy=true;
      this.link=false;
      this.help=false;
    }
   else if(index==5){
      this.privacy=false
      this.disc=false;
      this.termsc=false;
      this.copy=false;
      this.link=true;
      this.help=false;
    }
    else{
      this.privacy=false
      this.disc=false;
      this.termsc=false;
      this.copy=false;
      this.link=false;
      this.help=true;
    }
  }
}
