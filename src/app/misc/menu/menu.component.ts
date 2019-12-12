import { Component, OnInit } from '@angular/core';
import { Menu } from './menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus: Menu[] = [
    new Menu("NgProject", "/home", "The home page"),
    new Menu("Employee", "/employees/list", "The employees page"),
    // new Menu("Todo", "/todos/list", "The todos page"),
    new Menu("About", "/about", "The about page")
  ]
  constructor() { }

  ngOnInit() {
  }

}
