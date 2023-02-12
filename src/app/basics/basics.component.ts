import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.scss'],
})
export class BasicsComponent implements OnInit {
  dataArr = [50, 60, 120, 300];
  constructor() {}
  ngOnInit(): void {
    this.draw();
  }

  draw() {


    const width = 500;
    const height = 500;

    const wScale = d3.scaleLinear().domain([0, 600]).range([0, width]);

    const axis = d3.axisBottom(wScale).ticks(5);

    const color = d3.scaleLinear<string>().domain([0,600]).range(['red','blue'])

    const canvas = d3
    .select('.test_poligon')
    .append('svg')
    .attr('width', 500)
    .attr('height', 500)
    .append('g')
    .attr('transform','translate(20,0)')

    const bars = canvas
      .selectAll('rect')
      .data(this.dataArr)
      .enter()
      .append('rect')
      .attr('width', (d) => {
        return wScale(d);
      })
      .attr('height', 25)
      .attr('fill', (d)=>{return color(d)})
      .attr('y', (d, i) => {
        return 30 * i;
      });

    canvas.append('g').attr('transform','translate(0,200)').call(axis)
  }
}
