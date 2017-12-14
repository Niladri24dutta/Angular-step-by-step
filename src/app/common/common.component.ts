import { Component, OnInit ,Input} from '@angular/core';
import { DomSanitizer,SafeHtml } from '@angular/platform-browser'

@Component({
  selector: 'common-codesnippet',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class CommonComponent implements OnInit {
 
  @Input() showCodeSnippet:boolean;
  @Input() inputDesc:string;
  @Input() formattedOutput:string;

  constructor() { 
   
  }

  ngOnInit() {
     
  }
 
  
}
