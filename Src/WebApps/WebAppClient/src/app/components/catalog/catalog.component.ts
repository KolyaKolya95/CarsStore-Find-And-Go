import { Component, OnInit } from '@angular/core';
import { Catalog } from 'src/app/models/catalog';
import { Route, ActivatedRoute, Router } from '@angular/router';
import { CatalogService } from 'src/app/services/catalog/catalog.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  public usreTokenId: string;
  public catalogs: Catalog[];

  constructor(private catalogService: CatalogService,
    private route: ActivatedRoute,
    private router: Router) {

    this.catalogs = [];
    this.usreTokenId = localStorage.getItem('token');
  }

  ngOnInit() {
    console.log('Start');
    this.catalogService.getCatalogs().then(data => {
      console.log(data.length);
      this.catalogs = data;
    });
    console.log('Finish');
  }

  addCar() {
    if (this.usreTokenId)
      this.router.navigate(['/addCar']);
    else
      this.router.navigate(['/login']);
  }

  buyCar(id: string) {
    if (this.usreTokenId)
      this.router.navigate(['/buyCar', id]);
    else
      this.router.navigate(['/login']);
  }
}


