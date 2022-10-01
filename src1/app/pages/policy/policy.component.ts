import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.scss'],
})
export class PolicyComponent implements OnInit {

  constructor() { }
   nonDoc=true;
  ngOnInit() {}
  
  show(val){
   if(val==1){
     this.nonDoc=true;
   }
   else{
     this.nonDoc=false;
   }
  }
}
