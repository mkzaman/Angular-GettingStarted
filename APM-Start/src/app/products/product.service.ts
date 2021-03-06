import { IProduct } from "./product";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/observable";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { HttpErrorResponse } from "@angular/common/http";

@Injectable()
export class ProductService{
    private _productUrl = "./api/products/products.json";

    constructor(private _httpClient:HttpClient){
    }
    
    getProducts() : Observable<IProduct[]> {
        return this._httpClient.get<IProduct[]>(this._productUrl)
               .do(data => console.log('All: ' + JSON.stringify(data)))
               .catch(this.handleError);
    }

    private handleError(err: HttpErrorResponse){
        console.log(err.message);
        return Observable.throw(err.message);
    }
}