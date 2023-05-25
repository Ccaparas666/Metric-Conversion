import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.page.html',
  styleUrls: ['./temperature.page.scss'],
})
export class TemperaturePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  inputValue!: number;
  selectedInputUnit: string = 'celsius';
  selectedOutputUnit: string = 'fahrenheit';
  convertedValue: number | null = null;

  convert(): void {
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
