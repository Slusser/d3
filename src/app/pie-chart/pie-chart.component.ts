import { Component, OnInit } from '@angular/core';

import * as d3 from 'd3';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent implements OnInit {
  dataArr = [50, 20];
  constructor() {}
  ngOnInit(): void {
    this.draw();
  }

  draw() {
    const width = 500;
    const height = 500;

    const canvas = d3
      .select('.test_poligon2')
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', 'translate(20,0)');

    var circle1 = canvas
      .append('circle')
      .attr('cx', 150)
      .attr('cy', 150)
      .attr('r', 30);

    circle1
      .transition()
      .duration(1500)
      .attr('cx', 50)
      .end()
      .then(() => {
        return d3.select('circle').attr('fill', 'red');
      });
  }
}
