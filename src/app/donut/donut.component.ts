import { Component, OnInit } from '@angular/core';

import * as d3 from 'd3';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.scss'],
})
export class DonutComponent implements OnInit {
  dataArr = [10, 50, 90, 120];
  r = 120;

  constructor() {}
  ngOnInit(): void {
    this.draw();
  }

  draw() {
    const canvas = d3
      .select('.test_poligon4')
      .append('svg')
      .attr('width', 1500)
      .attr('height', 900);

    const group = canvas.append('g').attr('transform', 'translate(300,300)');

    const arc = d3.arc<any>().innerRadius(0).outerRadius(this.r);

    const color = d3
      .scaleOrdinal<number, string>()
      .range(['red', 'blue', 'orange', 'green']);

    const pie = d3.pie<number>().value((d) => {
      return d;
    });

    const arcs = group
      .selectAll('arc')
      .data(pie(this.dataArr))
      .enter()
      .append('g')
      .attr('class', 'arc');

    arcs
      .append('path')
      .attr('d', arc)
      .attr('fill', (d) => color(d.data));

    arcs
      .append('text')
      .attr('transform', (d) => 'translate(' + arc.centroid(d) + ')')
      .attr('text-anchor','middle')
      .attr('font-size','1em')
      .text((d) => d.data);
  }
}
