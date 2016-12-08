import { Component, OnInit} from '@angular/core';
import {CallService} from './cal.service';

@Component({
  selector: 'teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})

export class TesteComponent {

  private _callService: CallService;

  constructor(private _calService: CallService) {}

  getCalc(num) {

      return this._callService.calculaQuadrado(num);
  }

}