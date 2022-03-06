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

    public getShoes(storeId?: string, brandId?: string) {
        let url = `${this.apiServer.API_SERVER}/shoes`;
        if(!storeId && brandId) {
            url = `${this.apiServer.API_SERVER}/shoes?brandId=${brandId}`;
        }
        if(storeId && !brandId) {
            url = `${this.apiServer.API_SERVER}/shoes?storeId=${storeId}`;
        }
        if(storeId && brandId) {
            url = `${this.apiServer.API_SERVER}/shoes?storeId=${storeId}&&brandId=${brandId}`;
        }
        return this.httpClient.get(url).pipe(
            map((responseData: any )=> {
                const shoesArray: Shoe[] = [];
                for (let shoe in responseData.body) {
                   shoesArray.push(responseData.body[shoe]);
                    
                }
                console.log(shoesArray);
                return shoesArray;
            })
        )
    }
}