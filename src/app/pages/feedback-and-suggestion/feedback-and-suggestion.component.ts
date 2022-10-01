import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback-and-suggestion',
  templateUrl: './feedback-and-suggestion.component.html',
  styleUrls: ['./feedback-and-suggestion.component.scss'],
})
export class FeedbackAndSuggestionComponent implements OnInit {

  constructor() { }
   title="connectForm.text1"
  ngOnInit() {}
  
  show(index){
    if(index==1){
     this.title="connectForm.text1"
    }
    else{
     this.title="connectForm.text2"
     
    }
  }
}
