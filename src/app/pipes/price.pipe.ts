import { Pipe, PipeTransform } from "@angular/core";
import { Shoe } from "../models/shoe.model";

@Pipe({ name: 'priceFilter' })
export class PricePipe implements PipeTransform {
    transform(shoes: Shoe[], price: string): Shoe[] {
        if (!shoes) {
            return [];
          }
          if (!price) {
            return shoes;
          }
      
          return shoes.filter(it => {
            return parseFloat(price) <=  it.price;
          });
    }
}