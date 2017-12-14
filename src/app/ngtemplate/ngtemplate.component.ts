import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngtemplate',
  templateUrl: './ngtemplate.component.html',
  styleUrls: ['./ngtemplate.component.css']
})
export class NgtemplateComponent implements OnInit {
  visible:boolean = true;
  loadingdone:boolean = true;
  loadText:string = '';
  count:number = 0;
  constructor() { 
    this.loadText = this.loadingdone ? "Load" : "Stop loading";
  }

  ngOnInit() {
  }
  toggleDisplay(){
    this.visible = !this.visible;
    this.count++;
  }
  toggleLoad(){
   this.loadingdone = !this.loadingdone;
   this.loadText = this.loadingdone ? "Load" : "Stop loading";
  }
}
