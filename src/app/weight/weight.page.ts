import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-weight',
  templateUrl: './weight.page.html',
  styleUrls: ['./weight.page.scss'],
})
export class WeightPage {
  inputValue!: number;
  selectedInputUnit!: string;
  selectedOutputUnit!: string;
  convertedValue: number | null = null;
  isTextAreaDisabled: boolean = false;
  constructor(private AlertController: AlertController){}

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

  convert() {
    this.isTextAreaDisabled = true;
    if (
      this.inputValue === undefined ||
      this.selectedInputUnit === undefined ||
      this.selectedOutputUnit === undefined
    ) {
      this.convertedValue = null;
      return;
    }

    if (this.selectedInputUnit === this.selectedOutputUnit) {
      this.convertedValue = this.inputValue;
      return;
    }

    switch (this.selectedInputUnit) {
      case 'kilogram':
        this.convertedValue = this.convertKilogramTo(this.inputValue, this.selectedOutputUnit);
        break;
      case 'gram':
        this.convertedValue = this.convertGramTo(this.inputValue, this.selectedOutputUnit);
        break;
      case 'milligram':
        this.convertedValue = this.convertMilligramTo(this.inputValue, this.selectedOutputUnit);
        break;
      case 'microgram':
        this.convertedValue = this.convertMicrogramTo(this.inputValue, this.selectedOutputUnit);
        break;
      case 'pound':
        this.convertedValue = this.convertPoundTo(this.inputValue, this.selectedOutputUnit);
        break;
      case 'ounce':
        this.convertedValue = this.convertOunceTo(this.inputValue, this.selectedOutputUnit);
        break;
      case 'ton':
        this.convertedValue = this.convertTonTo(this.inputValue, this.selectedOutputUnit);
        break;
      default:
        this.convertedValue = null;
    }
  }

  convertKilogramTo(value: number, unit: string): number | null {
    switch (unit) {
      case 'kilogram':
        return value;
      case 'gram':
        return value * 1000;
      case 'milligram':
        return value * 1_000_000;
      case 'microgram':
        return value * 1_000_000_000;
      case 'pound':
        return value * 2.20462;
      case 'ounce':
        return value * 35.27396;
      case 'ton':
        return value * 0.001;
      default:
        return null;
    }
  }

  convertGramTo(value: number, unit: string): number | null {
    switch (unit) {
      case 'kilogram':
        return value / 1000;
      case 'gram':
        return value;
      case 'milligram':
        return value * 1000;
      case 'microgram':
        return value * 1_000_000;
      case 'pound':
        return value * 0.00220462;
      case 'ounce':
        return value * 0.03527396;
      case 'ton':
        return value * 0.000001;
      default:
        return null;
    }
  }

  convertMilligramTo(value: number, unit: string): number | null {
    switch (unit) {
      case 'kilogram':
        return value / 1_000_000;
      case 'gram':
        return value / 1000;
      case 'milligram':
        return value;
      case 'microgram':
        return value * 1000;
      case 'pound':
        return value * 0.00000220462;
      case 'ounce':
        return value * 0.00003527396;
      case 'ton':
        return value * 0.000000001;
      default:
        return null;
    }
  }

  convertMicrogramTo(value: number, unit: string): number | null {
    switch (unit) {
      case 'kilogram':
        return value / 1_000_000_000;
      case 'gram':
        return value / 1_000_000;
      case 'milligram':
        return value / 1000;
      case 'microgram':
        return value;
      case 'pound':
        return value * 0.00000000220462;
      case 'ounce':
        return value * 0.00000003527396;
      case 'ton':
        return value * 0.000000000001;
      default:
        return null;
    }
  }

  convertPoundTo(value: number, unit: string): number | null {
    switch (unit) {
      case 'kilogram':
        return value / 2.20462;
      case 'gram':
        return value / 0.00220462;
      case 'milligram':
        return value / 0.00000220462;
      case 'microgram':
        return value / 0.00000000220462;
      case 'pound':
        return value;
      case 'ounce':
        return value * 16;
      case 'ton':
        return value * 0.000453592;
      default:
        return null;
    }
  }

  convertOunceTo(value: number, unit: string): number | null {
    switch (unit) {
      case 'kilogram':
        return value / 35.27396;
      case 'gram':
        return value / 0.03527396;
      case 'milligram':
        return value / 0.00003527396;
      case 'microgram':
        return value / 0.00000003527396;
      case 'pound':
        return value / 16;
      case 'ounce':
        return value;
      case 'ton':
        return value * 0.0000283495;
      default:
        return null;
    }
  }

  convertTonTo(value: number, unit: string): number | null {
    switch (unit) {
      case 'kilogram':
        return value * 1000;
      case 'gram':
        return value * 1_000_000;
      case 'milligram':
        return value * 1_000_000_000;
      case 'microgram':
        return value * 1_000_000_000_000;
      case 'pound':
        return value * 2204.62;
      case 'ounce':
        return value * 35273.96;
      case 'ton':
        return value;
      default:
        return null;
    }
  }
}
