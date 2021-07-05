import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ProductService } from '../productservice';

@Component({
  selector: 'app-tables-list',
  templateUrl: './tables-list.component.html',
  styleUrls: ['./tables-list.component.css']
})
export class TablesListComponent implements OnInit {
  tables: any[]
  constructor(private productService: ProductService) { }
  @Output() selected = new EventEmitter<any>();
  ngOnInit(): void {
    this.productService.getTablesList().then(tables => {
      this.tables = tables;
    })
  }
  onSelect(table) {
    this.selected.emit(table);
  }
}
