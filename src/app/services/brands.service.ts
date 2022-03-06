import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { Brand } from "../models/brand.model";
import { ApiService } from "../variables/server";

@Injectable({
    providedIn: 'root'
})
export class BrandService {
    constructor(private readonly httpClient: HttpClient, private apiServer: ApiService) {}

    public getBrands() {
        return this.httpClient.get(`${this.apiServer.API_SERVER}/brands`).pipe(
            map((response: any) => {
                const brandsArray: Brand[] = []
                for(let brand in response.body) {
                    brandsArray.push(response.body[brand])
                }
                return brandsArray;
            })
        )
    }
}