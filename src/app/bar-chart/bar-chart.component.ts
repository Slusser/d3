import { Component, OnInit } from '@angular/core';

import * as d3 from 'd3';

interface dataArr {
  x: number;
  y: number;
}

interface dataArc {
  x: number;
  y: number;
}
@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements OnInit {
  dataArr: dataArr[] = [
    { x: 10, y: 20 },
    { x: 40, y: 60 },
    { x: 50, y: 70 },
  ];

  dataArc: dataArc[] = [
    { x: 10, y: 20 },
    { x: 40, y: 60 },
    { x: 50, y: 70 },
  ];
  constructor() {}
  ngOnInit(): void {
    this.draw();
  }

  x(d: number[]) {
    return d[0];
  }

  draw() {
    const width = 500;
    const height = 500;

    const r = 20;
    const p = Math.PI * 2;

    const canvas = d3
      .select('.test_poligon3')
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    const group = canvas.append('g').attr('transform', 'translate(400,300)');

    const line = d3
      .line<dataArr>()
      .x((d) => d.x)
      .y((d) => d.y);

    group
      .selectAll('path')
      .data([this.dataArr])
      .enter()
      .append('path')
      .attr('d', line)
      .attr('fill', 'none')
      .attr('stroke', '#000000')
      .attr('stroke-width', 2);

    const group2 = canvas.append('g').attr('transform', 'translate(100,100)');

    const arc = d3
      .arc<any>()
      .innerRadius(r-5)
      .outerRadius(r)
      .startAngle(0)
      .endAngle(p-1);

    group2.append('path').attr('d', arc);
  }
}
