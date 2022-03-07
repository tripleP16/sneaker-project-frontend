import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { StorToCreate } from "../models/store.create.model";
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

    createStore(store: StorToCreate) {
        return this.httpClient.post(`${this.apiServer.API_SERVER}/store`, store)
    }
    

    addStoreToShoe(storeId: string, shoeId: string) {
        return this.httpClient.patch(`${this.apiServer.API_SERVER}/store/add/${storeId}/shoe`, {id: shoeId})
    }
}