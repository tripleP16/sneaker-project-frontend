import { Pipe, PipeTransform } from "@angular/core";
import { Shoe } from "../models/shoe.model";

@Pipe({ name: 'modelFilter' })
export class ModelPipe implements PipeTransform {
    transform(shoes: Shoe[], model: string): Shoe[] {
        if (!shoes) {
            return [];
          }
          if (!model) {
            return shoes;
          }
          model = model.toLocaleLowerCase();
      
          return shoes.filter(it => {
            return it.model.toLocaleLowerCase().includes(model);
          });
    }
}