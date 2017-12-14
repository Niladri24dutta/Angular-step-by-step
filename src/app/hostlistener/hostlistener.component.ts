import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-hostlistener',
  templateUrl: './hostlistener.component.html',
  styleUrls: ['./hostlistener.component.css']
})
export class HostlistenerComponent implements OnInit {
  text: string = '';
  displayText: boolean = false;
  sourceCodeBlock: string ='';
  desc: string = '';
  buttonText: string = '';
  showCodeBlock: boolean = false;
  constructor() { 
    this.text = this.displayText ? "Hide" : "Show";
    this.buttonText = this.showCodeBlock ? "Hide" : "Show";
  }
  
  @HostListener('click') showMessage(){
    this.displayText = !this.displayText;
    this.text = this.displayText ? "Hide" : "Show";
  }
  ngOnInit() {
  }
  displayCodeBlock(){
    this.showCodeBlock = !this.showCodeBlock;
    this.buttonText = this.showCodeBlock ? "Hide" : "Show";
    this.desc = "A sample code using @HostListener";
    this.sourceCodeBlock = `@HostListener('click') showMessage(){
      this.displayText = !this.displayText;
      this.text = this.displayText ? "Hide" : "Show";
    }`;
  }
}
