import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ELEMENT_DATA } from './data/elements.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  // name = 'Harshit Pareek';
  // family = [];
  // inputMember = '';

  // @ViewChild('memberRef', { static: true }) memberRef: ElementRef;

  ngOnInit() {
    console.log('[AppComponent] [OnInit]');
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // onMemberClickHandler() {
  //   this.family.push(this.memberRef.nativeElement.value);
  // }
}
