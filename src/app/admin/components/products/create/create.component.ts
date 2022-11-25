import { parseTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from '../../../../base/base.component';
import { Create_Product } from '../../../../contracts/Create_Product';
import { AlertifyService, MessageType, Position } from '../../../../services/admin/alertify.service';
import { ProductService } from '../../../../services/common/models/product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent extends BaseComponent implements OnInit {

  constructor(spinner: NgxSpinnerService, private productService: ProductService, private alertify: AlertifyService) {
      super(spinner);
  }

  ngOnInit(): void {
  }

  create(title: HTMLInputElement, GenreId: HTMLInputElement, PageCount: HTMLInputElement, AuthorId: HTMLInputElement, PublishDate: HTMLInputElement) {
    this.showSpinner(SpinnerType.ballatom);
    const create_Product: Create_Product = new Create_Product();
    create_Product.title = title.value;
    create_Product.GenreId = parseInt(GenreId.value);
    create_Product.PageCount = parseInt(PageCount.value);
    create_Product.AuthorId = parseInt(AuthorId.value);
    create_Product.PublishDate = new Date(PublishDate.value);

    this.productService.create(create_Product, () => {
      this.hideSpinner(SpinnerType.ballatom);
      this.alertify.message("Başarıyla eklendi", {
        dismissOthers:true,
        messageType:MessageType.Success,
        position:Position.TopRight
      });

    });

  }

}
