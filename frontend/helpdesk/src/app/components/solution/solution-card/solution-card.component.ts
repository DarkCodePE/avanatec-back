import {Component, Input, OnInit} from '@angular/core';
import {Chamado} from "../../../models/chamado";

@Component({
  selector: 'app-solution-card',
  templateUrl: './solution-card.component.html',
  styleUrls: ['./solution-card.component.css']
})
export class SolutionCardComponent implements OnInit {
  @Input() ticket: Chamado;
  constructor() { }

  ngOnInit(): void {
  }

}
