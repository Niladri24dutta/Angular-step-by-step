import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { DomSanitizer,SafeHtml } from '@angular/platform-browser'

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit {
  sourceCodeType: string;
  public minDate : Date = new Date(2017,11,10);
  public maxDate:Date = new Date(2019,11,10);
  public bsValue:Date = new Date();
  public bsConfig :Partial<BsDatepickerConfig>;
  public colorTheme:string = "theme-dark-blue";
  public selectedCountry:string = '';
  public buttonText:string = '';
  public showCodeBlock:boolean = false;
  public sourceCodeBlock:string = '';
  public description:string = '';
  public countries:string[] = ['United kingdom','United states','India','Japan','Denmark','France','Italy','Brazil'];
  constructor(private sanitizer:DomSanitizer) {
    this.bsConfig = Object.assign({},{containerClass: this.colorTheme});
    this.buttonText = this.showCodeBlock ? "Hide" : "Show";
   }

  ngOnInit() {
  }
  onSubmit(){
    console.log("form submiited");
  }
  displayCodeBlock(){
    this.showCodeBlock = !this.showCodeBlock;
    this.buttonText = this.showCodeBlock ? "Hide" : "Show";
  }
  getCodeDescription(type:string){
    if(type == "datepicker"){
      return "A sample code for bootstrap datepicker";
    }
    else if(type == "typeahead"){
      return "A sample code for bootstrap typeahead" ;
    }
  }

  getSourceCode(option:string){
    if(option === 'datepicker'){
      this.sourceCodeBlock = `HTML : <input type="text"
      class="form-control"
      [minDate]="minDate"
      [maxDate]="maxDate"
      [bsConfig]="bsConfig"
      #datepicker="bsDatepicker"
      bsDatepicker [(ngModel)]="bsValue" name="mydatepicker"> 
and Typescript : 
      private minDate : Date = new Date(2017,11,10);
      private maxDate:Date = new Date(2019,11,10);
      private bsValue:Date = new Date();
      private bsConfig :Partial<BsDatepickerConfig>;`;
    }
    else if(option === 'typeahead'){
      this.sourceCodeBlock = `       HTML : <input class="form-control" [(ngModel)]="selectedCountry" [typeahead]="countries" name="country"> 
       Typescript : private selectedCountry:string = '';
       private countries:string[] = ['United kingdom','United states','India','Japan','Denmark','France','Italy','Brazil'];
      `;
    }
    //return this.sanitizer.bypassSecurityTrustHtml(this.sourceCodeBlock);
    return this.sourceCodeBlock;
  }
}
