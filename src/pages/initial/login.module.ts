import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { login } from './login';

import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    login,
  ],
  imports: [
    IonicPageModule.forChild(login),
    ComponentsModule
  ],
})
export class LoginPageModule {}