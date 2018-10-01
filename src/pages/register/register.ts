import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  firstname:string;
  lastname:string;
  Password:string;
  confirmpass:string;
  username:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  reg(){
    if(this.firstname!=null && this.lastname!=null && this.username!=null&& this.Password!=null && this.confirmpass!=null)
    {
      if(this.Password==this.confirmpass)
      {

        localStorage.setItem(this.username,this.Password);
        this.navCtrl.setRoot(LoginPage);
      }
      else
      {
        const alert = this.alertCtrl.create({
          title: 'Password Mismatch',
          subTitle: 'please enter correct password',
          buttons: ['OK']
        });
        alert.present();
      }
    }
    else{
      const alert = this.alertCtrl.create({
        title: 'Empty field',
        subTitle: 'please fill in all details',
        buttons: ['OK']
      });
      alert.present();
    }
  }
}
