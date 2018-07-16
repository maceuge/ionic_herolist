import { Component, OnInit } from '@angular/core';
//import { AlertController } from '../../../node_modules/ionic-angular/umd';
import { AlertController } from 'ionic-angular';


@Component({
    selector: 'app-pendientes',
    templateUrl: './pendientes.component.html',
    styleUrls: ['']
})
export class PendientesComponent implements OnInit {

      //items = ['Thor', 'Ironman', 'Capitan America', 'SpiderMan', 'Guardians of Galaxy'];
      //items = [];

        heros = [
            {
                id: 0,
                name: 'Thor'
            },
            {
                id: 1,
                name: 'Ironman'
            },
            {
                id: 2,
                name: 'Capitan America'
            },
            {
                id: 3,
                name: 'SpiderMan'
            },
            {
                id: 4,
                name: 'Guardians of Galaxy'
            },
        ]


      check: boolean;

    constructor(public alertCtrl: AlertController) {  

        if (this.heros.length > 0) {
            this.check = true;
        } else {
            this.check = false;
        }
    }

    ngOnInit(): void { }

    itemSelected(id:string, name: string) {
        localStorage.setItem(id, name);
        console.log(name);
    }


    showPrompt() {
        const prompt = this.alertCtrl.create({
          title: 'Ingresar Heroe',
          message: "Aqui podes ingresar un nuevo Heroe",
          inputs: [
            {
              name: 'nombre',
              placeholder: 'Nombre'
            },
          ],
          buttons: [
            {
              text: 'Cancelar',
              handler: data => {
                console.log(data.nombre);
                
              }
            },
            {
              text: 'Guardar',
              handler: data => {
                //this.items.push(data.nombre);
                console.log('Saved clicked');
              }
            }
          ]
        });
        prompt.present();
      }


}
