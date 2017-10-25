import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profiel',
  templateUrl: './profiel.component.html',
  styleUrls: ['./profiel.component.css']
})
export class ProfielComponent implements OnInit {
  kvk: number = 69658498;
  
  constructor() { }

  ngOnInit() {
  }

}
