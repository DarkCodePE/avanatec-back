import {Component, OnInit, ViewChild} from '@angular/core';
import {Chamado} from "../../../models/chamado";
import {Product} from "../../../models/Product";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {ChamadoService} from "../../../services/chamado.service";
import {ProductService} from "../../../services/product.service";
import {MatDialog} from "@angular/material/dialog";
import {ProductCreateComponent} from "../modal/product-create/product-create.component";
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  ELEMENT_DATA: Product[] = [];
  FILTERED_DATA: Product[] = [];

  displayedColumns = ['sku', 'titulo', 'precio', 'categoria'];
  dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor( private service: ProductService,
               private _sanitizer: DomSanitizer,
               public dialog: MatDialog) { }

  ngOnInit(): void {
    this.findAll();
  }
  decodeImage(base64Image: string){
    return this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,'
        + base64Image);
  }
  findAll(): void {
    this.service.findAll().subscribe(resp => {
      console.log(resp)
      this.ELEMENT_DATA = resp;
      this.dataSource = new MatTableDataSource<any>(resp);
      //this.dataSource.paginator = this.paginator;
    })
  }

  applyFilter(event: KeyboardEvent) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  OpenModal() {
    this.dialog.open(ProductCreateComponent, {
      panelClass: 'custom-modalbox',
      width: '700px',
      height: 'auto',
      maxHeight: '88vh',
    }).afterClosed()
        .subscribe((result?: boolean) => {
          if (result===true) {
            console.log(result)
          }
        });
  }
}
