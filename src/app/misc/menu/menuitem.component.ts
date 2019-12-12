import { Component, OnInit, Input } from '@angular/core';
import { Menu } from './menu';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menuitem.component.html',
  styleUrls: ['./menuitem.component.css']
})
export class MenuitemComponent implements OnInit {

  @Input() 
  menu: Menu;

  constructor() { }

  ngOnInit() {
  }

}
