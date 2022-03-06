import { Component, OnInit } from '@angular/core';
import { Shoe } from '../models/shoe.model';
import { ShoesService } from '../services/shoes.service';

@Component({
  selector: 'app-sneaker-showcase',
  templateUrl: './sneaker-showcase.component.html',
  styleUrls: ['./sneaker-showcase.component.css']
})
export class SneakerShowcaseComponent implements OnInit {
  p: number = 1;
  shoes: Shoe[] = []
  constructor(private readonly shoesService: ShoesService) { }

  ngOnInit(): void {
    this.getShoes();
  }

  getShoes() {
    this.shoesService.getShoes().subscribe((response) => this.shoes = response);
  }

}
