import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {}
  
  appPages=['About FAME II','Policy','Scheme','Press Release','FAME II Depository','Important Links','Contact Us','Help','Connect',"FAQs","Privacy Policy",'Disclaimer',"Terms & Conditions",'Copyright Policy', 'Hyperlinking Policy','Help','Sitemap','Archive']
 
}
