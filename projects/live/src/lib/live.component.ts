import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.less']
})
export class LiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
      console.log( 'init live.component' );
  }

}
