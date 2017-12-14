import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit {
  private minDate : Date = new Date(2017,11,10);
  private maxDate:Date = new Date(2019,11,10);
  private bsValue:Date = new Date();
  private bsConfig :Partial<BsDatepickerConfig>;
  private colorTheme:string = "theme-dark-blue";
  private selectedCountry:string = '';
  private countries:string[] = ['United kingdom','United states','India','Japan','Denmark','France','Italy','Brazil'];
  constructor() {
    this.bsConfig = Object.assign({},{containerClass: this.colorTheme})
   }

  ngOnInit() {
  }
  onSubmit(){
    console.log("form submiited");
  }
  
}
