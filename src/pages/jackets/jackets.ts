import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductService } from '../../providers/product-service/product-service';

/**
 * Generated class for the JacketsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jackets',
  templateUrl: 'jackets.html',
})
export class JacketsPage {
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
    console.log('ionViewDidLoad JacketsPage');
    this.productService.getJackets().snapshotChanges()
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
