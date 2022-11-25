import { Injectable } from '@angular/core';
import { Create_Product } from 'src/app/contracts/Create_Product';
import { HttpClientService } from '../http-client.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClientService: HttpClientService) { }

  create(product: Create_Product, successCallBack?: any){
    this.httpClientService.post({
      controller:"Book"
    }, product).subscribe(result => {
      successCallBack();  
    });
  }
}
