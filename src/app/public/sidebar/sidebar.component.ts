import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Output() sidebarclick: EventEmitter<any> = new EventEmitter<any>();
  @Input() myselectionText;
selectionText;
  constructor() {
  }

  ngOnInit() {

    this.selectionText = this.myselectionText;
    console.log(this.myselectionText);
  }
  OnClick(event) {
    console.log(event);

    this.selectionText = event;
    this.sidebarclick.emit(event);
  }

}
