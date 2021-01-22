import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Harshit Pareek';
  family = [];
  inputMember = '';

  @ViewChild('memberRef', { static: true }) memberRef: ElementRef;

  ngOnInit() {
  }

  onMemberClickHandler() {
    this.family.push(this.memberRef.nativeElement.value);
  }
}
