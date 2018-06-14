import { map } from 'rxjs/operator/map';
import { ProductService } from './../../providers/product-service/product-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DressesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dresses',
  templateUrl: 'dresses.html',
})
export class DressesPage {
  product: any = {};
  sales: any[] = [];
  upcoming: any[] = [];
  activeState = '1';

  constructor(public navCtrl: NavController, public navParams: NavParams, public productService: ProductService) {
  }

  changeActive(nr) {
    this.activeState = nr;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DressesPage');
    // this.productService.getAll().snapshotChanges().subscribe(actions =>{
    //   actions.map(result => {
    //     let data = result.payload.val();

    //     this.product = data;
       
    //     if(this.product.type === 'Sale') {
    //       this.sales.push(this.product);
    //     }
    //     else {
    //       this.upcoming.push(this.product);
    //     }
    //   });
    // });
    this.productService.getDresses().snapshotChanges()
    .subscribe(actions => {
      actions.map( result => {
        let data = result.payload.val();

        this.product = data;
       
        if(this.product.type === 'Sale') {
          this.sales.push(this.product);
        }
        else {
          this.upcoming.push(this.product);
        }
      });
    });
  }

}
