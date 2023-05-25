import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VolumePageRoutingModule } from './volume-routing.module';

import { VolumePage } from './volume.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VolumePageRoutingModule
  ],
  declarations: [VolumePage]
})
export class VolumePageModule {}
