import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {
  dataArr = [10, 50, 90, 120];
  r = 120;

  constructor() {}
  ngOnInit(): void {
    this.draw();
  }

  draw() {
    const canvas = d3
      .select('.test_poligon5')
      .append('svg')
      .attr('width', 1500)
      .attr('height', 900);
  }
}
