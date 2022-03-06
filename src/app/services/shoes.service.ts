import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { Shoe } from "../models/shoe.model";
import { ApiService } from "../variables/server";

@Injectable({
    providedIn: 'root'
})
export class ShoesService {
    constructor(private httpClient: HttpClient, private apiServer: ApiService) {}

    public getShoes() {
        return this.httpClient.get(`${this.apiServer.API_SERVER}/shoes`).pipe(
            map((responseData: any )=> {
                console.log(responseData.body)
                const shoesArray: Shoe[] = [];
                for (let shoe in responseData.body) {
                   shoesArray.push(responseData.body[shoe]);
                    
                }
                return shoesArray;
            })
        )
    }
}