import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  heroList: any[] = []; 

  constructor(public navCtrl: NavController) {
    
    for (let i = 0; i < localStorage.length; i++) {
      let index = i.toString();
      let element = localStorage.getItem(index);
      this.heroList.push(element);
    }
    
    console.log(this.heroList);

  }

  deleteHero(i: number) {
    let index = i.toString();
    localStorage.removeItem(index);
    this.heroList.splice(i, 1);
  }

}
