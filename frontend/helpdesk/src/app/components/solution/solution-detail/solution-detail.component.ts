import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../../services/product.service";
import {DomSanitizer} from "@angular/platform-browser";
import {MatDialog} from "@angular/material/dialog";
import {Solution} from "../../../models/Product";

@Component({
  selector: 'app-solution-detail',
  templateUrl: './solution-detail.component.html',
  styleUrls: ['./solution-detail.component.css']
})
export class SolutionDetailComponent implements OnInit {
  ELEMENT_DATA_SOLUTIONS: Solution[] = [];
  constructor(private service: ProductService,
              private _sanitizer: DomSanitizer,
              public dialog: MatDialog,
              private route: ActivatedRoute,
              private router: Router ) {

  }

  ngOnInit(): void {
    const ticketID = this.route.snapshot.paramMap.get('id');
    this.findTicketsByProductId(Number(ticketID));
  }
  findTicketsByProductId(ticketID:number): void {
    this.service.findSolutionsByTickets(ticketID).subscribe(resp => {
      console.log(resp)
      this.ELEMENT_DATA_SOLUTIONS = resp;
      //this.dataSource.paginator = this.paginator;
    })
  }
}
