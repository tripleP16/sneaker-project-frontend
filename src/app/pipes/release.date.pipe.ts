import { Pipe, PipeTransform } from "@angular/core";
import { Shoe } from "../models/shoe.model";

@Pipe({ name: 'dateFilter' })
export class ReleaseDatePipe implements PipeTransform {
    transform(shoes: Shoe[], date: string): Shoe[] {
        if (!shoes) {
            return [];
          }
          if (!date) {
            return shoes;
          }
      
          return shoes.filter(it => {
            return new Date(it.releaseDate) >= new Date(date);
          });
    }
}