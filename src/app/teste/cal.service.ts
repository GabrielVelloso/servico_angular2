import { Component } from '@angular/core';
import {Injectable} from '@angular/core';

export class CallService {

    calculaQuadrado(num: number) {
        return num * num;
    }
}