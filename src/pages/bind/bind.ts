import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BindPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//{name:'bindPage'}
@IonicPage()
@Component({
  selector: 'page-bind',
  templateUrl: 'bind.html',
})
export class BindPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  // life cycle method - 화면이 로드 되고 난 후 호출되는 메서드
  ionViewDidLoad() {
    alert('ionViewDidLoad BindPage' + " " + this.navParams.get("name"));
    console.log("1. >> Bindpage ionViewDidLoad() 호출")
  }

  goBack() {
    this.navCtrl.pop();
  }

  ionViewWillEnter() {
    console.log("2. >> Bindpage ionViewWillEnter() 호출")
  }

  ionViewWillUnload() {
    console.log("3. >> Bindpage ionViewWillUnload() 호출")
  }
}
