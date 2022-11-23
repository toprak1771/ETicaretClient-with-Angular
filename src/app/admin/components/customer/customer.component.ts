import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { Book } from 'src/app/contracts/book';
import { HttpClientService } from 'src/app/services/common/http-client.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent extends BaseComponent implements OnInit {

  constructor(spinner : NgxSpinnerService,private httpClientService:HttpClientService) { 
    super(spinner)
  }

  ngOnInit(): void {
    this.showSpinner(SpinnerType.ballatom);

    // this.httpClientService.post({
    //   controller:"Book"
    // },{
    //   title: "Türkiye",
    //   genreId: 1,
    //   authorId: 1,
    //   pageCount: 500,
    //   publishDate: "2021-11-22T13:36:49.108Z"
    // }).subscribe();

    this.httpClientService.get<Book[]>({
      controller:"Book"
    }).subscribe(data=>data.forEach(element => {
      console.log(element);
    }));

    // this.httpClientService.put({
    //   controller:"Book"
    // },{
    //   title: "stringv3",
    //   genreId: 1,
    //   pageCount: 100,
    //   authorId: 1     
    // },1).subscribe();

    // this.httpClientService.delete({
    //   controller:"Book"
    // },2).subscribe();

    // this.httpClientService.get({
    //   fullEndPoint:"https://jsonplaceholder.typicode.com/posts"
    // }).subscribe(data2=>console.log(data2));
  }

}
