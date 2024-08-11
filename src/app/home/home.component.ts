import { IProduct } from './../iproduct';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { error } from 'console';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  constructor(private _ProductsService: ProductsService) {}

  products: IProduct[] = [];

  ngOnInit(): void {
    this._ProductsService.getProducts().subscribe({
      next: (res) => {
        this.products = res;
      },
      error: (err) => {
        console.log(err);
        
      },
    });
  }
}
