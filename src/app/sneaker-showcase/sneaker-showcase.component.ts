import { Component, Input, OnInit } from '@angular/core';
import { Brand } from '../models/brand.model';
import { Shoe } from '../models/shoe.model';
import { Store } from '../models/store.model';
import { BrandService } from '../services/brands.service';
import { ShoesService } from '../services/shoes.service';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-sneaker-showcase',
  templateUrl: './sneaker-showcase.component.html',
  styleUrls: ['./sneaker-showcase.component.css']
})
export class SneakerShowcaseComponent implements OnInit {
  p: number = 1;
  shoes: Shoe[] = []
  brands: Brand[] = [];
  stores: Store[] = [];
  brandFilter = '0';
  storeFilter = '0';
  isLoading = false;
  shoesBeforeFilter: Shoe[] = [];
  
  constructor(
    private readonly shoesService: ShoesService,
    private readonly brandsService: BrandService,
    private readonly storesService: StoreService,
    ) { }

  ngOnInit(): void {
    this.getShoes();
    this.getBrands();
    this.getStores();
  }

  sendFilters() {
    this.shoes = [];
    this.isLoading = true;
    if(this.brandFilter == '0' && this.storeFilter == '0'){
      this.getShoes();
    }
    if(this.brandFilter != '0' && this.storeFilter != '0') {
      this.shoesService.getShoes(this.storeFilter, this.brandFilter).subscribe((response) => {
        this.shoes = response
        this.isLoading = false;
      
      });
    }
    if(this.brandFilter == '0' && this.storeFilter != '0') {
      this.shoesService.getShoes(this.storeFilter).subscribe((response) => {
        this.shoes = response
        this.isLoading = false;
      
      });
    }
    if(this.brandFilter != '0' && this.storeFilter == '0') {
      this.shoesService.getShoes(undefined, this.brandFilter).subscribe((response) => {
        this.shoes = response
        this.isLoading = false;
      
      });
    }
  }

  getBrandFilter(s: string){
    this.brandFilter = s;
    this.sendFilters();
  }
  getStoreFilter(s: string) {
    this.storeFilter = s;
    this.sendFilters();
  }
  getShoes() {
    this.isLoading = true;
    this.shoesService.getShoes().subscribe((response) => {
      this.shoes = response
      this.isLoading = false;
    
    });
  }
  getBrands() {
    this.brandsService.getBrands().subscribe((response)=> this.brands =  response);
  }

  getStores() {
    this.storesService.getStores().subscribe((response) => this.stores = response);
  }


}
