import { Component, Input, OnInit } from '@angular/core';
import { Shoe } from '../models/shoe.model';

@Component({
  selector: 'app-sneaker-item',
  templateUrl: './sneaker-item.component.html',
  styleUrls: ['./sneaker-item.component.css']
})
export class SneakerItemComponent implements OnInit {
  @Input() shoe!: Shoe;
  releaseDate =''
  constructor() { }

  ngOnInit(): void {
    this.releaseDate =  `${new Date(this.shoe.releaseDate).getMonth() + 1}/${new Date(this.shoe.releaseDate).getDate()}/${new Date(this.shoe.releaseDate).getFullYear()}`
  }

}
