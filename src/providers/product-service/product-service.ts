import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

/*
  Generated class for the ProductServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductService {

  constructor(private db: AngularFireDatabase) {
    console.log('Hello ProductServiceProvider Provider');
  }
  // getAll() {
  //   return this.db.list('/bombus-products');
  // }

  getDresses() {
    return this.db.list('/kakus-products/dresses');
  }

  getJackets() {
    return this.db.list('/kakus-products/jackets');
  }

  getShoes() {
    return this.db.list('/kakus-products/shoes');
  }
}