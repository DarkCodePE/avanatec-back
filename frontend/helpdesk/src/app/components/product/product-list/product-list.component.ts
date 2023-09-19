import {Component, OnInit, ViewChild} from '@angular/core';
import {Chamado} from "../../../models/chamado";
import {Product} from "../../../models/Product";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {ChamadoService} from "../../../services/chamado.service";
import {ProductService} from "../../../services/product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  ELEMENT_DATA: Product[] = [];
  FILTERED_DATA: Product[] = [];

  displayedColumns: string[] = ['sku', 'title', 'category', 'price', 'status', 'acciones'];
  dataSource = new MatTableDataSource<Product>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor( private service: ProductService) { }

  ngOnInit(): void {
    this.findAll();
  }
  findAll(): void {
    this.service.findAll().subscribe(resp => {
      console.log(resp)
      this.ELEMENT_DATA = resp;
      this.dataSource = new MatTableDataSource<Product>(resp);
      this.dataSource.paginator = this.paginator;
    })
  }

  applyFilter($event: KeyboardEvent) {
    
  }
}
