import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropDownComponent } from './ui-components/drop-down/drop-down.component';
import { RadioButtonComponent } from './ui-components/radio-button/radio-button.component';
import { ButtonComponent } from './ui-components/button/button.component';
import { TextFieldComponent } from './ui-components/text-field/text-field.component';
import { NavBarComponent } from './ui-components/nav-bar/nav-bar.component';
import { SideNavComponent } from './ui-components/side-nav/side-nav.component';



@NgModule({
  declarations: [
    DropDownComponent,
    RadioButtonComponent,
    ButtonComponent,
    TextFieldComponent,
    NavBarComponent,
    SideNavComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
