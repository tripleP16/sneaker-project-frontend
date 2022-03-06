import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { Store } from "../models/store.model";
import { ApiService } from "../variables/server";

@Injectable({
    providedIn: 'root'
})
export class StoreService {
    constructor(private readonly httpClient: HttpClient, private apiServer: ApiService) {}

    getStores() {
        return this.httpClient.get(`${this.apiServer.API_SERVER}/store`).pipe(
            map((responseData: any) => {
                const storesArray: Store[] = []
                console.log(responseData);
                for (let store in responseData.body) {
                    storesArray.push(responseData.body[store])
                }
                return storesArray;
            })
        )
    }
}