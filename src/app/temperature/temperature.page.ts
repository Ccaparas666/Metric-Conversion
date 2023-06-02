import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.page.html',
  styleUrls: ['./temperature.page.scss'],
})
export class TemperaturePage implements OnInit {

  constructor(private AlertController: AlertController){}

  ngOnInit() {
  }

  inputValue!: number;
  selectedInputUnit: string = 'celsius';
  selectedOutputUnit: string = 'fahrenheit';
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
    if (isNaN(this.inputValue)) {
      this.convertedValue = null;
      return;
    }

    switch (this.selectedInputUnit) {
      case 'celsius':
        this.convertedValue = this.convertCelsiusTo(this.inputValue, this.selectedOutputUnit);
        break;
      case 'fahrenheit':
        this.convertedValue = this.convertFahrenheitTo(this.inputValue, this.selectedOutputUnit);
        break;
      case 'kelvin':
        this.convertedValue = this.convertKelvinTo(this.inputValue, this.selectedOutputUnit);
        break;
      default:
        this.convertedValue = null;
        break;
    }
  }

  convertCelsiusTo(value: number, unit: string): number {
    switch (unit) {
      case 'celsius':
        return value;
      case 'fahrenheit':
        return (value * 9/5) + 32;
      case 'kelvin':
        return value + 273.15;
      default:
        return NaN;
    }
  }

  convertFahrenheitTo(value: number, unit: string): number {
    switch (unit) {
      case 'celsius':
        return (value - 32) * 5/9;
      case 'fahrenheit':
        return value;
      case 'kelvin':
        return (value + 459.67) * 5/9;
      default:
        return NaN;
    }
  }

  convertKelvinTo(value: number, unit: string): number {
    switch (unit) {
      case 'celsius':
        return value - 273.15;
      case 'fahrenheit':
        return (value * 9/5) - 459.67;
      case 'kelvin':
        return value;
      default:
        return NaN;
    }
  }

}
