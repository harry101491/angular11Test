import { Component, OnInit } from '@angular/core';

import * as jspdf from "jspdf";
import html2canvas from "html2canvas";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  ngOnInit() {
    const sourceElement = document.getElementById("pdfContainer");
    html2canvas(sourceElement).then((canvas) => {
      console.log("the value of canvas is: ", canvas);
    });
  }

}
