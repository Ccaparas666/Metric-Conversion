import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area',
  templateUrl: './area.page.html',
  styleUrls: ['./area.page.scss'],
})
export class AreaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  inputValue!: number;
  selectedInputUnit!: string;
  selectedOutputUnit!: string;
  convertedValue: number | null = null;
  convert(): void {
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
