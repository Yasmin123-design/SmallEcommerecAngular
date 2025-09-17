import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (err) => {
        console.error('Error fetching products:', err);
      }
    });
  }
getImageUrl(path: string): string {
  const baseUrl = 'https://smallecommerece-fedmepdab6ghamd8.canadacentral-01.azurewebsites.net/';
  if (!path) return '';

  const normalized = path.replace(/\\/g, '/').trim().replace(/^\/+/, '');

  try {
    const url = new URL(normalized, baseUrl).toString();
    console.log('Full image path:', url);
    return url;
  } catch (err) {
    console.error('Invalid image path:', path, err);
    return '';
  }
}


}



