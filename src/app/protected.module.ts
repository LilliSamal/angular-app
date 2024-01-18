import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProtectedRoutingModule } from './protected-routing.module';
import { PanelComponent } from './panel/panel.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    PanelComponent
  ],
  imports: [
    CommonModule,
    // Import our Routes for this module
    ProtectedRoutingModule,
    // Angular Material Imports
    MatButtonModule,
  ]
})
export class ProtectedModule { }
