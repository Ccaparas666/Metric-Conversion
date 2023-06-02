import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-area',
  templateUrl: './area.page.html',
  styleUrls: ['./area.page.scss'],
})
export class AreaPage implements OnInit {

  constructor(private AlertController: AlertController){}

  ngOnInit() {
  }
  inputValue!: number;
  selectedInputUnit!: string;
  selectedOutputUnit!: string;
  convertedValue: number | null = null;
  isTextAreaDisabled: boolean = false;

  clearTextarea() {
    this.isTextAreaDisabled = false;
    this.inputValue = Number.NaN;
    this.convertedValue = null;
    this.selectedInputUnit = '';
    this.selectedOutputUnit = '';
    
  }
  convert1(){
    const input1 = document.getElementById('input1')as HTMLInputElement;
    const inputU = document.getElementById('inputU')as HTMLInputElement;
    const inputO = document.getElementById('inputO')as HTMLInputElement;
    if(!input1.value || !inputU.value || !inputO.value ){
      const alert = this.AlertController.create({message:'Please enter or choose conversion!!', 
        buttons:['Okay']});
        alert.then((alert)=> alert.present
        ());
        this.isTextAreaDisabled = false;
        this.inputValue = Number.NaN;
        this.convertedValue = null;
        this.selectedInputUnit = '';
        this.selectedOutputUnit = '';
    }else{
      this.convert();
    }
  }
  convert(): void {
    this.isTextAreaDisabled = true;
    if (this.inputValue !== null && this.selectedInputUnit && this.selectedOutputUnit) {
      if (this.selectedInputUnit === this.selectedOutputUnit) {
        this.convertedValue = this.inputValue;
      } else {
        if (this.selectedInputUnit === 'square-meter') {
          this.convertedValue = this.convertSquareMeterTo(this.inputValue, this.selectedOutputUnit);
        } else {
          const squareMeterValue = this.convertToSquareMeter(this.inputValue, this.selectedInputUnit);
          this.convertedValue = this.convertSquareMeterTo(squareMeterValue, this.selectedOutputUnit);
        }
      }
    } else {
      this.convertedValue = null;
    }
  }

  convertToSquareMeter(value: number, unit: string): number {
    switch (unit) {
      case 'square-kilometer':
        return value * 1000000;
      case 'hectare':
        return value * 10000;
      case 'square-mile':
        return value * 2589988.11;
      case 'acre':
        return value * 4046.86;
      case 'square-yard':
        return value * 0.836127;
      case 'square-foot':
        return value * 0.092903;
      case 'square-inch':
        return value * 0.00064516;
      default:
        return value;
    }
  }

  convertSquareMeterTo(value: number, unit: string): number {
    switch (unit) {
      case 'square-kilometer':
        return value / 1000000;
      case 'hectare':
        return value / 10000;
      case 'square-mile':
        return value / 2589988.11;
      case 'acre':
        return value / 4046.86;
      case 'square-yard':
        return value / 0.836127;
      case 'square-foot':
        return value / 0.092903;
      case 'square-inch':
        return value / 0.00064516;
      default:
        return value;
    }
  }

}
