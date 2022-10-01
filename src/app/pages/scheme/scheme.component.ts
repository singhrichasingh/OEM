import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scheme',
  templateUrl: './scheme.component.html',
  styleUrls: ['./scheme.component.scss'],
})
export class SchemeComponent implements OnInit {

  constructor() { }
  model=true
  ngOnInit() {}


  show(index){
    
    if(index==1){
   this.model=true;
    }
    else{
    this.model=false
    }
  }
}
