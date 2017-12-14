import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dir',
  templateUrl: './dir.component.html',
  styleUrls: ['./dir.component.css']
})
export class DirComponent implements OnInit {
  sourceCodeBlock: string ='';
  desc: string = '';
  buttonText: string = '';
  showCodeBlock: boolean = false;

  constructor() {
    this.buttonText = this.showCodeBlock ? "Hide" : "Show";
   }

  ngOnInit() {
  }
  displayCodeBlock(){
    this.showCodeBlock = !this.showCodeBlock;
    this.buttonText = this.showCodeBlock ? "Hide" : "Show";
    this.desc = "A sample code using Directive";
    this.sourceCodeBlock = `HTML : <h4 blueColor>Hello world</h4> 
    and Typescript : 
    import {Directive,ElementRef} from '@angular/core'
    
    @Directive({
        selector:'[blueColor]'
    })
    
    export class BlueColorDirective{
    
        constructor(element:ElementRef){
            element.nativeElement.style.color = "blue";
        }
    }`;
  }

}
