import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { Admin } from "../models/admin.model";
import { ApiService } from "../variables/server";

@Injectable({
    providedIn:'root'
})
export class AdminService {
    constructor(
        private readonly httpClient: HttpClient,
        private readonly apiServer: ApiService,
    ){}

    public login(admin: Admin) {
        return this.httpClient.post(`${this.apiServer.API_SERVER}/auth/signin/admin`, admin).pipe(
            map((response: any) => {
                return response.body;
            })
        )
    }
}