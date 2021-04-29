import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {  

cp: number;
tp: number;
jaws: any;
teeth: any;
gap: any;
ngl: number;
d1: number;

  constructor(
    private alertCtrl : AlertController
  ) {}


  ngOnInit(){

  }
  // ionViewWillEnter(){
  //   calcTP(teeth, jaws);
  // }
  


calcTP(teeth, jaws, cp){
  let gap = +this.teeth - +this.jaws;

  console.log('Teeth: ', teeth );
  console.log('Jaws: ', jaws );
  console.log('Current Price: ', cp );
  console.log('Current Gap: ', gap );


  if (gap>1 || gap==1){
    this.ngl= +teeth + +gap;
    this.tp = +this.ngl + +gap;

    console.log( "IT REACHES HERE 1 ")    
    console.log( "NGL : ", this.ngl );
    console.log( "TP : ", this.tp )

    this.showCalc(cp, this.tp)

    return this.gap;

  }else if (gap>-1&&gap<1){

    console.log( "IT REACHES HERE 2 ")
    // this.showCalc(cp, this.tp);
    this.showFail();

  }else if(gap<-1){
    this.ngl = +teeth + +gap;
    this.tp = +this.ngl + +gap;
    
    console.log( "IT REACHES HERE 3 ")
    // showCalc(ngl, tp);
    console.log( "NGL : ", this.ngl );
    console.log( "TP : ", this.tp )

    this.showCalc(cp, this.tp)
  }
}

showCalc(cp, tp){
  let d1 = this.tp - this.cp;
  console.log( "WHAT IS D1 : ", d1)

  if(d1>2 || d1==2){
    this.showBuy();
    console.log('You can buy now');
  }else if(d1<-2 || d1==-2){
    this.showSell();
    console.log('You can sell now');
  }else{
    this.showFail();
    console.log('Please change the timeframe');
  };
}


async showBuy() {
  const alert = await this.alertCtrl.create({
    header: 'Thank You',
    subHeader: 'You can buy now',
    buttons: ['OK']
  });

  await alert.present();
}
async showSell() {
  const alert = await this.alertCtrl.create({
    header: 'Thank You',
    subHeader: 'You can sell now',
    buttons: ['OK']
  });

  await alert.present();
}
async showFail() {
  const alert = await this.alertCtrl.create({
    header: 'Thank You',
    subHeader: 'Please choose another timeframe',
    buttons: ['OK']
  });

  await alert.present();
}

showMessage(){
  console.log('Please change the timeframe');
}
}