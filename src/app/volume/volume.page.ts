import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-volume',
  templateUrl: './volume.page.html',
  styleUrls: ['./volume.page.scss'],
})
export class VolumePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  inputValue!: number;
  selectedInputUnit!: string;
  selectedOutputUnit!: string;
  convertedValue: number | null = null;

  convert() {
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
      case 'cubic-meter':
        this.convertedValue = this.convertCubicMeterTo(this.inputValue, this.selectedOutputUnit);
        break;
      case 'cubic-centimeter':
        this.convertedValue = this.convertCubicCentimeterTo(this.inputValue, this.selectedOutputUnit);
        break;
      case 'cubic-foot':
        this.convertedValue = this.convertCubicFootTo(this.inputValue, this.selectedOutputUnit);
        break;
      case 'cubic-inch':
        this.convertedValue = this.convertCubicInchTo(this.inputValue, this.selectedOutputUnit);
        break;
      case 'gallon':
        this.convertedValue = this.convertGallonTo(this.inputValue, this.selectedOutputUnit);
        break;
      case 'liter':
        this.convertedValue = this.convertLiterTo(this.inputValue, this.selectedOutputUnit);
        break;
      case 'milliliter':
        this.convertedValue = this.convertMilliliterTo(this.inputValue, this.selectedOutputUnit);
        break;
      default:
        this.convertedValue = null;
    }
  }

  convertCubicMeterTo(value: number, unit: string): number | null {
    switch (unit) {
      case 'cubic-meter':
        return value;
      case 'cubic-centimeter':
        return value * 1_000_000;
      case 'cubic-foot':
        return value * 35.3147;
      case 'cubic-inch':
        return value * 61_023.7;
      case 'gallon':
        return value * 264.172;
      case 'liter':
        return value * 1_000;
      case 'milliliter':
        return value * 1_000_000;
      default:
        return null;
    }
  }

  convertCubicCentimeterTo(value: number, unit: string): number | null {
    switch (unit) {
      case 'cubic-meter':
        return value / 1_000_000;
      case 'cubic-centimeter':
        return value;
      case 'cubic-foot':
        return value * 0.0000353147;
      case 'cubic-inch':
        return value * 0.0610237;
      case 'gallon':
        return value * 0.000264172;
      case 'liter':
        return value * 0.001;
      case 'milliliter':
        return value * 1;
      default:
        return null;
    }
  }

  convertCubicFootTo(value: number, unit: string): number | null {
    switch (unit) {
      case 'cubic-meter':
        return value / 35.3147;
      case 'cubic-centimeter':
        return value * 28_316.8;
      case 'cubic-foot':
        return value;
      case 'cubic-inch':
        return value * 1_728;
      case 'gallon':
        return value * 7.48052;
      case 'liter':
        return value * 28.3168;
      case 'milliliter':
        return value * 28_316.8;
      default:
        return null;
    }
  }

  convertCubicInchTo(value: number, unit: string): number | null {
    switch (unit) {
      case 'cubic-meter':
        return value / 61_023.7;
      case 'cubic-centimeter':
        return value * 16.3871;
      case 'cubic-foot':
        return value * 0.000578704;
      case 'cubic-inch':
        return value;
      case 'gallon':
        return value * 0.00360465;
      case 'liter':
        return value * 0.0163871;
      case 'milliliter':
        return value * 16.3871;
      default:
        return null;
    }
  }

  convertGallonTo(value: number, unit: string): number | null {
    switch (unit) {
      case 'cubic-meter':
        return value / 264.172;
      case 'cubic-centimeter':
        return value * 3_785.41;
      case 'cubic-foot':
        return value * 0.133681;
      case 'cubic-inch':
        return value * 231;
      case 'gallon':
        return value;
      case 'liter':
        return value * 3.78541;
      case 'milliliter':
        return value * 3_785.41;
      default:
        return null;
    }
  }

  convertLiterTo(value: number, unit: string): number | null {
    switch (unit) {
      case 'cubic-meter':
        return value / 1_000;
      case 'cubic-centimeter':
        return value * 1_000;
      case 'cubic-foot':
        return value * 0.0353147;
      case 'cubic-inch':
        return value * 61.0237;
      case 'gallon':
        return value * 0.264172;
      case 'liter':
        return value;
      case 'milliliter':
        return value * 1_000;
      default:
        return null;
    }
  }

  convertMilliliterTo(value: number, unit: string): number | null {
    switch (unit) {
      case 'cubic-meter':
        return value / 1_000_000;
      case 'cubic-centimeter':
        return value / 1;
      case 'cubic-foot':
        return value * 0.0000353147;
      case 'cubic-inch':
        return value * 0.0610237;
      case 'gallon':
        return value * 0.000264172;
      case 'liter':
        return value * 0.001;
      case 'milliliter':
        return value;
      default:
        return null;
    }
  }
}
