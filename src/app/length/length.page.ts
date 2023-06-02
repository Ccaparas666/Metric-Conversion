import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-length',
  templateUrl: './length.page.html',
  styleUrls: ['./length.page.scss'],
})
export class LengthPage {
  
  inputUnit!: string;
  outputUnit!: string;
  convertedValue: number | null = null;
  selectedUnit!: string;
  inputValue!: number;
  isTextAreaDisabled: boolean = false;
  
constructor(private AlertController: AlertController){}
  clearTextarea() {
    this.isTextAreaDisabled = false;
    this.inputValue = Number.NaN;
    this.convertedValue = null;
    this.inputUnit = '';
    this.outputUnit = '';
    
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
    this.inputUnit = '';
    this.outputUnit = '';
    }else{
      this.convert();
    }
  }
  convert() {

    this.isTextAreaDisabled = true;
    if (
      this.inputValue !== undefined &&
      this.inputUnit !== undefined &&
      this.outputUnit !== undefined
    ) {
      switch (this.inputUnit) {
        case 'meter':
          this.convertedValue = this.convertMeterTo(this.inputValue, this.outputUnit);
          break;
        case 'kilometer':
          this.convertedValue = this.convertKilometerTo(this.inputValue, this.outputUnit);
          break;
        case 'centimeter':
          this.convertedValue = this.convertCentimeterTo(this.inputValue, this.outputUnit);
          break;
        case 'millimeter':
          this.convertedValue = this.convertMillimeterTo(this.inputValue, this.outputUnit);
          break;
        case 'micrometer':
          this.convertedValue = this.convertMicrometerTo(this.inputValue, this.outputUnit);
          break;
        case 'nanometer':
          this.convertedValue = this.convertNanometerTo(this.inputValue, this.outputUnit);
          break;
        case 'mile':
          this.convertedValue = this.convertMileTo(this.inputValue, this.outputUnit);
          break;
        case 'yard':
          this.convertedValue = this.convertYardTo(this.inputValue, this.outputUnit);
          break;
        case 'foot':
          this.convertedValue = this.convertFootTo(this.inputValue, this.outputUnit);
          break;
        case 'inch':
          this.convertedValue = this.convertInchTo(this.inputValue, this.outputUnit);
          break;
        case 'light-year':
          this.convertedValue = this.convertLightYearTo(this.inputValue, this.outputUnit);
          break;
        default:
          this.convertedValue = null;
      }
    } else {
      this.convertedValue = null;
          
    }
  }
  // FOR METER
  convertMeterTo(value: number, unit: string): number {
    switch (unit) {
      case 'meter':
        return value;
      case 'kilometer':
        return value / 1000;
      case 'centimeter':
        return value * 100;
      case 'millimeter':
        return value * 1000;
      case 'micrometer':
        return value * 1e6;
      case 'nanometer':
        return value * 1e9;
      case 'mile':
        return value * 0.000621371;
      case 'yard':
        return value * 1.09361;
      case 'foot':
        return value * 3.28084;
      case 'inch':
        return value * 39.3701;
      case 'light-year':
        return value * 1.057e-16;
      default:
        return NaN;
    }
  }
  // FOR KM
  convertKilometerTo(value: number, unit: string): number {
    switch (unit) {
      case 'meter':
        return value * 1000;
      case 'kilometer':
        return value;
      case 'centimeter':
        return value * 100000;
      case 'millimeter':
        return value * 1e6;
      case 'micrometer':
        return value * 1e9;
      case 'nanometer':
        return value * 1e12;
      case 'mile':
        return value * 0.621371;
      case 'yard':
        return value * 1093.61;
      case 'foot':
        return value * 3280.84;
      case 'inch':
        return value * 39370.1;
      case 'light-year':
        return value * 1.057e-13;
      default:
        return NaN;
    }
  }
  // FOR CM
  convertCentimeterTo(value: number, unit: string): number {
    switch (unit) {
      case 'meter':
        return value / 100;
      case 'kilometer':
        return value / 100000;
      case 'centimeter':
        return value;
      case 'millimeter':
        return value * 10;
      case 'micrometer':
        return value * 1e4;
      case 'nanometer':
        return value * 1e7;
      case 'mile':
        return value * 6.2137e-6;
      case 'yard':
        return value * 0.0109361;
      case 'foot':
        return value * 0.0328084;
      case 'inch':
        return value * 0.393701;
      case 'light-year':
        return value * 3.2408e-18;
      default:
        return NaN;
    }
  }
  // FOR MM
  convertMillimeterTo(value: number, unit: string): number {
    switch (unit) {
      case 'meter':
        return value / 1000;
      case 'kilometer':
        return value / 1e6;
      case 'centimeter':
        return value / 10;
      case 'millimeter':
        return value;
      case 'micrometer':
        return value * 1000;
      case 'nanometer':
        return value * 1e6;
      case 'mile':
        return value * 6.2137e-7;
      case 'yard':
        return value * 0.00109361;
      case 'foot':
        return value * 0.00328084;
      case 'inch':
        return value * 0.0393701;
      case 'light-year':
        return value * 3.2408e-19;
      default:
        return NaN;
    }
  }
  convertMicrometerTo(value: number, unit: string): number {
    switch (unit) {
      case 'meter':
        return value / 1e6;
      case 'kilometer':
        return value / 1e9;
      case 'centimeter':
        return value / 1e4;
      case 'millimeter':
        return value / 1000;
      case 'micrometer':
        return value;
      case 'nanometer':
        return value * 1000;
      case 'mile':
        return value * 6.2137e-10;
      case 'yard':
        return value * 0.00000109361;
      case 'foot':
        return value * 0.00000328084;
      case 'inch':
        return value * 0.0000393701;
      case 'light-year':
        return value * 3.2408e-22;
      default:
        return NaN;
    }
  }
  
  convertNanometerTo(value: number, unit: string): number {
    switch (unit) {
      case 'meter':
        return value / 1e9;
      case 'kilometer':
        return value / 1e12;
      case 'centimeter':
        return value / 1e7;
      case 'millimeter':
        return value / 1e6;
      case 'micrometer':
        return value / 1000;
      case 'nanometer':
        return value;
      case 'mile':
        return value * 6.2137e-13;
      case 'yard':
        return value * 1.0936e-9;
      case 'foot':
        return value * 3.2808e-9;
      case 'inch':
        return value * 3.937e-8;
      case 'light-year':
        return value * 1.057e-25;
      default:
        return NaN;
    }
  }
  
  convertMileTo(value: number, unit: string): number {
    switch (unit) {
      case 'meter':
        return value / 0.00062137;
      case 'kilometer':
        return value / 0.62137;
      case 'centimeter':
        return value / 6.2137e-6;
      case 'millimeter':
        return value / 6.2137e-7;
      case 'micrometer':
        return value / 6.2137e-10;
      case 'nanometer':
        return value / 6.2137e-13;
      case 'mile':
        return value;
      case 'yard':
        return value * 1760;
      case 'foot':
        return value * 5280;
      case 'inch':
        return value * 63360;
      case 'light-year':
        return value * 1.7011e-13;
      default:
        return NaN;
    }
  }
  
  convertYardTo(value: number, unit: string): number {
    switch (unit) {
      case 'meter':
        return value / 1.0936;
      case 'kilometer':
        return value / 1093.6;
      case 'centimeter':
        return value / 0.010936;
      case 'millimeter':
        return value / 0.0010936;
      case 'micrometer':
        return value / 1.0936e-6;
      case 'nanometer':
        return value / 1.0936e-9;
      case 'mile':
        return value / 1760;
      case 'yard':
        return value;
      case 'foot':
        return value * 3;
      case 'inch':
        return value * 36;
      case 'light-year':
        return value * 9.6652e-17;
      default:
        return NaN;
    }
  }
  
  convertFootTo(value: number, unit: string): number {
    switch (unit) {
      case 'meter':
        return value / 3.2808;
      case 'kilometer':
        return value / 3280.8;
      case 'centimeter':
        return value / 0.032808;
      case 'millimeter':
        return value / 0.0032808;
      case 'micrometer':
        return value / 3.2808e-6;
      case 'nanometer':
        return value / 3.2808e-9;
      case 'mile':
        return value / 5280;
      case 'yard':
        return value / 3;
      case 'foot':
        return value;
      case 'inch':
        return value * 12;
      case 'light-year':
        return value * 3.2217e-17;
      default:
        return NaN;
    }
  }
  
  convertInchTo(value: number, unit: string): number {
    switch (unit) {
      case 'meter':
        return value / 39.37;
      case 'kilometer':
        return value / 39370;
      case 'centimeter':
        return value / 0.3937;
      case 'millimeter':
        return value / 0.03937;
      case 'micrometer':
        return value / 3.937e-5;
      case 'nanometer':
        return value / 3.937e-8;
      case 'mile':
        return value / 63360;
      case 'yard':
        return value / 36;
      case 'foot':
        return value / 12;
      case 'inch':
        return value;
      case 'light-year':
        return value * 2.6848e-18;
      default:
        return NaN;
    }
  }
  
  convertLightYearTo(value: number, unit: string): number {
    switch (unit) {
      case 'meter':
        return value / 9.461e15;
      case 'kilometer':
        return value / 9.461e12;
      case 'centimeter':
        return value / 9.461e13;
      case 'millimeter':
        return value / 9.461e14;
      case 'micrometer':
        return value / 9.461e17;
      case 'nanometer':
        return value / 9.461e20;
      case 'mile':
        return value * 5.8786e12;
      case 'yard':
        return value * 1.057e16;
      case 'foot':
        return value * 3.1628e16;
      case 'inch':
        return value * 3.7957e17;
      case 'light-year':
        return value;
      default:
        return NaN;
    }
  }
}
